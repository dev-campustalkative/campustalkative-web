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
      companyname: string;
      industry: string;
      location: string;
      linkedinurl: string;
      outreach: string;
    },
    any,
    undefined
  >;
  loading: boolean;
};

export const EntrepreneurForm: React.FC<Props> = ({ form, loading }) => {
  return (
    <div>
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
          name="companyname"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel htmlFor="companyname" className="text-right">
                Company name
              </FormLabel>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <Input
                    id="companyname"
                    placeholder="John Doe & CO."
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
                    placeholder="ceo@johndoe.co"
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
                      <SelectValue
                        id="country"
                        placeholder="Select a country"
                      />
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
          name="industry"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel htmlFor="industry" className="text-right">
                Industry
              </FormLabel>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <Input
                    id="industry"
                    placeholder="Tech"
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
          name="location"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel htmlFor="location" className="text-right">
                Location
              </FormLabel>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <Input
                    id="industry"
                    placeholder="Lagos, Nigeria"
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
          name="linkedinurl"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel htmlFor="linkedinurl" className="text-right">
                Linkedin URL
              </FormLabel>
              <FormControl>
                <div className="col-span-3 space-y-1 relative">
                  <Input
                    id="linkedinurl"
                    placeholder="https://linkedin.com/in/johndoe/"
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
                    placeholder="I am a vibrant and motivated driven entrepreneur..."
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
          name="outreach"
          render={({ field }) => (
            <FormItem className="grid grid-cols-4 items-center gap-4">
              <FormLabel htmlFor="outreach" className="text-right">
                How did you hear about us?
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <div className="col-span-3 space-y-1 relative">
                    <SelectTrigger disabled={loading} >
                      <SelectValue
                        id="outreach"
                        placeholder="Select a method"
                      />
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
    </div>
  );
};
