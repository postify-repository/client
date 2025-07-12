import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>로그인</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p>로그인 모달 내용</p>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
