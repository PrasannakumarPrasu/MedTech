import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();
  const [isSignUp, setIsSignUp] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log(isSignUp ? 'Sign up submitted' : 'Login submitted');
    setLocation('/account');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 z-50 bg-card border-b">
        <div className="px-4 py-4 flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLocation('/')}
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold text-lg">{isSignUp ? 'Create Account' : 'Login'}</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <div className="text-4xl">💊</div>
          </div>
          <h2 className="font-bold text-2xl mb-2">
            {isSignUp ? 'Get Started' : 'Welcome Back'}
          </h2>
          <p className="text-muted-foreground text-sm">
            {isSignUp ? 'Create account to order medicines' : 'Login to continue shopping'}
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-testid="input-name"
                />
              </div>
            )}

            <div>
              <label className="text-sm font-medium mb-2 block">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="pl-10"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  data-testid="input-phone"
                />
              </div>
            </div>

            {isSignUp && (
              <div>
                <label className="text-sm font-medium mb-2 block">Email (Optional)</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-email"
                  />
                </div>
              </div>
            )}

            <Button
              className="w-full h-12 text-base"
              onClick={handleSubmit}
              data-testid="button-submit"
            >
              {isSignUp ? 'Create Account' : 'Send OTP'}
            </Button>

            <div className="text-center pt-4">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-primary font-medium"
                data-testid="button-toggle-mode"
              >
                {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </div>
        </Card>

        <p className="text-xs text-center text-muted-foreground mt-6 px-4">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </main>
    </div>
  );
}
