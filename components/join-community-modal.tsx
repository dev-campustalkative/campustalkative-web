'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Button from './button';
import axios from 'axios';

import { Apple, Paypal } from 'iconsax-react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { School, School2Icon } from 'lucide-react';
import { FaBusinessTime } from 'react-icons/fa';
import { useState } from 'react';
import { StudentForm } from './student-form';
import { EntrepreneurForm } from './entrepreneur-form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form } from './ui/form';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export function JoinCommunityModal({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [selectedForm, setSelectedForm] = useState<string>('student');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const StudentSchema = z.object({
    firstname: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters.' }),
    lastname: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    country: z.string().min(2, { message: 'Please select an option.' }),
    description: z
      .string()
      .min(10, { message: 'Description must be at least 10 characters.' }),
    path: z.string().min(2, { message: 'Please select a path.' }),
    outreach: z.string().min(2, { message: 'Please select an option.' }),
  });

  const EntrepreneurSchema = z.object({
    firstname: z
      .string()
      .min(2, { message: 'First name must be at least 2 characters.' }),
    lastname: z
      .string()
      .min(2, { message: 'Last name must be at least 2 characters.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    companyname: z.string().min(2, {
      message: 'business/company name must be at least 2 characters.',
    }),
    industry: z.string(),
    location: z.string(),
    linkedinurl: z.string(),
    country: z.string().min(2, { message: 'Please select an option.' }),
    description: z
      .string()
      .min(10, { message: 'Description must be at least 10 characters.' }),
    outreach: z.string().min(2, { message: 'Please select an option.' }),
  });

  const studentsForm = useForm<z.infer<typeof StudentSchema>>({
    resolver: zodResolver(StudentSchema),
  });

  const enterpreneurForm = useForm<z.infer<typeof EntrepreneurSchema>>({
    resolver: zodResolver(EntrepreneurSchema),
  });

  const onStudentSubmit = async (data: z.infer<typeof StudentSchema>) => {
    const id = uuidv4();
    try {
      setLoading(true);
      const response = await axios.post('/api/submit/student', {
        id,
        ...data,
      });

      if (response && response.status == 200) {
        setLoading(false);
        toast(
          'Congratulations you have successfully signed up to campustalkative.',
        );
        setTimeout(() => {
          router.push('/join');
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      toast(`Error: ${error}`);
    }
  };

  const onEntrepreneurSubmit = async (
    data: z.infer<typeof EntrepreneurSchema>,
  ) => {
    const id = uuidv4();
    try {
      setLoading(true);
      const response = await axios.post('/api/submit/entrepreneur', {
        id,
        ...data,
      });

      if (response && response.status == 200) {
        setLoading(false);
        toast(
          'Congratulations you have successfully signed up to campustalkative.',
        );
        setTimeout(() => {
          router.push('/join');
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      toast(`Error: ${error}`);
    }
  };

  const handleFormChange = (value: string) => {
    setSelectedForm(value);
  };

  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>{children}</div>
      <Dialog
        modal
        open={isModalOpen}
        onOpenChange={() => setIsModalOpen(true)}
      >
        <DialogContent className="sm:max-w-[425px] ">
          <DialogHeader>
            <DialogTitle>Join the Campustalkative Community</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&quot;re
              done.
            </DialogDescription>
          </DialogHeader>

          <RadioGroup
            defaultValue="students"
            className="grid grid-cols-2 gap-4 justify-"
          >
            <div>
              <RadioGroupItem
                value="students"
                id="students"
                className="peer sr-only cursor-pointer"
                onClick={() => handleFormChange('student')}
              />
              <Label
                htmlFor="students"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <School className="mb-3 h-8 w-8" />
                Student?
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="entrepreneur"
                id="entrepreneur"
                className="peer sr-only cursor-pointer"
                onClick={() => handleFormChange('entrepreneur')}
              />
              <Label
                htmlFor="entrepreneur"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <FaBusinessTime size={30} />
                Entrepreneur?
              </Label>
            </div>
          </RadioGroup>

          {selectedForm === 'student' ? (
            <Form {...studentsForm}>
              <form onSubmit={studentsForm.handleSubmit(onStudentSubmit)}>
                <StudentForm form={studentsForm} loading={loading} />
                <DialogFooter className="flex justify-between flex-row">
                  <div>
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                      disabled={loading}
                      outline
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </DialogFooter>
              </form>
            </Form>
          ) : (
            <Form {...enterpreneurForm}>
              <form
                onSubmit={enterpreneurForm.handleSubmit(onEntrepreneurSubmit)}
              >
                <EntrepreneurForm form={enterpreneurForm} loading={loading} />
                <DialogFooter className="flex justify-between flex-row">
                  <div>
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      type="button"
                      disabled={loading}
                      outline
                    >
                      Cancel
                    </Button>
                  </div>
                  <div>
                    <Button type="submit">Submit</Button>
                  </div>
                </DialogFooter>
              </form>
            </Form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
