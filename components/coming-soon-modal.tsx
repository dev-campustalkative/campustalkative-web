import React, { ReactNode } from 'react';
import Button from './button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Props {
  children: ReactNode;
  text: string;
  title: string;
}

const ComingSoonModal: React.FC<Props> = ({ children, text, title }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-lg p-10 shadow-lg">
        <DialogHeader className="my-10">
          <DialogTitle className="my-5 text-2xl font-bold">{title}</DialogTitle>
          <DialogDescription className="text-lg text-justify">
            {text}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;
