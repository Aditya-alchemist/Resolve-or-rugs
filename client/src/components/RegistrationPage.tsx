import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import deekPose1 from "@assets/Deek_Pose_15_1759237131290.png";
import { Play } from "lucide-react";

interface RegistrationPageProps {
  onComplete: (name: string, email: string) => void;
}

export default function RegistrationPage({ onComplete }: RegistrationPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = { name: "", email: "" };
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (newErrors.name || newErrors.email) {
      setErrors(newErrors);
      return;
    }
    
    onComplete(name.trim(), email.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-background to-card">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img 
              src={deekPose1} 
              alt="Deek mascot" 
              className="w-32 h-32 object-contain animate-bounce"
              style={{ animationDuration: '2s' }}
            />
          </div>
          <h1 className="font-display text-4xl text-foreground">
            Resolve or Rug?
          </h1>
          <p className="text-muted-foreground text-lg">
            Test your prediction market skills with Deek!
          </p>
        </div>

        <Card className="border-2">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-display text-center">Join the Game</CardTitle>
            <CardDescription className="text-center">
              Enter your details to start playing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" data-testid="label-name">Your Name</Label>
                <Input
                  id="name"
                  data-testid="input-name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: "" });
                  }}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive" data-testid="error-name">{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" data-testid="label-email">Email Address</Label>
                <Input
                  id="email"
                  data-testid="input-email"
                  type="email"
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive" data-testid="error-email">{errors.email}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg font-semibold"
                data-testid="button-start-playing"
              >
                <Play className="w-5 h-5 mr-2" />
                Start Playing
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">
          Learn the difference between good markets and rugs!
        </p>
      </div>
    </div>
  );
}
