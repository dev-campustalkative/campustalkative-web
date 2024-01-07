import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { UseFormReturn } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { country_list } from '@/data/country_list';

type Props = {
  form: UseFormReturn<
    {
      firstname: string;
      lastname: string;
      email: string;
      description: string;
      country: string;
      path: string;
      outreach: string;
    },
    any,
    undefined
  >;
  loading: boolean;
};
export const StudentForm: React.FC<Props> = ({ form, loading }) => {
  return (
    <div className="grid gap-4 py-4">
      <FormField
        control={form.control}
        name="firstname"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-6">
            <FormLabel htmlFor="firstname" className="text-right">
              First name
            </FormLabel>
            <FormControl>
              <div className="col-span-3 space-y-1 relative">
                <Input
                  id="firstname"
                  placeholder="John"
                  disabled={loading}
                  {...field}
                />
                <FormMessage className="absolute text-[10px]" />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="lastname"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="lastname" className="text-right">
              Last name
            </FormLabel>
            <FormControl>
              <div className="col-span-3 space-y-1 relative">
                <Input
                  id="lastName"
                  placeholder="Doe"
                  disabled={loading}
                  {...field}
                />
                <FormMessage className="absolute text-[10px]" />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="email" className="text-right">
              Email Address
            </FormLabel>
            <FormControl>
              <div className="col-span-3 space-y-1 relative">
                <Input
                  id="email"
                  placeholder="john.doe@university.edu"
                  disabled={loading}
                  {...field}
                />
                <FormMessage className="absolute text-[10px]" />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="country" className="text-right">
              What country are you from?
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <SelectTrigger disabled={loading}>
                    <SelectValue id="country" placeholder="Select a country" />
                  </SelectTrigger>
                  <FormMessage className="absolute text-[10px]" />
                </div>
              </FormControl>
              <SelectContent>
                {country_list.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="description" className="text-right">
              Tell us about you
            </FormLabel>
            <FormControl>
              <div className="col-span-3 space-y-1 relative">
                <Textarea
                  id="description"
                  disabled={loading}
                  placeholder="I am a vibrant and talented student..."
                  {...field}
                />
                <FormMessage className="absolute text-[10px]" />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="path"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="path" className="text-right">
              What path do you wish to join?
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <SelectTrigger disabled={loading}>
                    <SelectValue id="path" placeholder="Select a path." />
                  </SelectTrigger>
                  <FormMessage className="absolute text-[10px]" />
                </div>
              </FormControl>
              <SelectContent>
                <SelectItem value="tech">Tech</SelectItem>
                <SelectItem value="entertainment">Entertainment</SelectItem>
                <SelectItem value="corporate">Corporate</SelectItem>
                <SelectItem value="entrepreneurship">
                  Entrepreneurship
                </SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="outreach"
        render={({ field }) => (
          <FormItem className="grid grid-cols-4 items-center gap-4">
            <FormLabel htmlFor="outreach" className="text-right">
              How did you hear about us?
            </FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <SelectTrigger disabled={loading}>
                    <SelectValue id="outreach" placeholder="Select a method" />
                  </SelectTrigger>
                  <FormMessage className="absolute text-[10px]" />
                </div>
              </FormControl>
              <SelectContent>
                <SelectItem value="twitter">Twitter</SelectItem>
                <SelectItem value="instagram">Instagram</SelectItem>
                <SelectItem value="facebook">Facebook</SelectItem>
                <SelectItem value="youtube">Youtube</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
};
