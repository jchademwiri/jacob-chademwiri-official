/**
 * Sign Up Success Page
 * Confirmation page after successful user registration
 */

import { CheckCircle, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function SignUpSuccessPage() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Account Created!</CardTitle>
            <CardDescription>
              Your account has been successfully created
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-blue-50 p-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-blue-900">
                    Check your email
                  </p>
                  <p className="text-sm text-blue-700">
                    We've sent you a confirmation email. Please click the link
                    in the email to verify your account and complete the
                    registration process.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                <strong>Next steps:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Check your email inbox (and spam folder)</li>
                <li>Click the confirmation link</li>
                <li>Return to login once confirmed</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <Button asChild>
                <Link href="/auth/login">Go to Login</Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>

            <div className="text-center text-xs text-muted-foreground pt-4 border-t">
              <p>
                Didn't receive the email? Check your spam folder or{' '}
                <Link
                  href="/auth/sign-up"
                  className="underline hover:text-foreground"
                >
                  try signing up again
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
