import { Button } from '../ui/Button';
import { Github } from 'lucide-react';

export function SocialButtons() {
  return (
    <div className="space-y-3">
      <Button variant="outline" className="w-full" onClick={() => {}}>
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
        Continue with Google
      </Button>
      <Button variant="outline" className="w-full" onClick={() => {}}>
        <Github className="w-5 h-5 mr-2" />
        Continue with GitHub
      </Button>
    </div>
  );
}