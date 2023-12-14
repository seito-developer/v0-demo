/**
 * v0 by Vercel.
 * @see https://v0.dev/t/sljXDlmAvui
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card key="1">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email and password to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <div className="flex justify-between items-center">
          <Link className="text-blue-500 hover:text-blue-700" href="#">
            Sign Up
          </Link>
          <Link className="text-blue-500 hover:text-blue-700" href="#">
            Forgot Password?
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4 mt-0 pt-0">
        <Button className="w-full my-2">Sign in</Button>
        <Button className="w-full bg-[#4285F4] text-white flex justify-center items-center my-2">
          <ChromeIcon className="w-4 h-4 mr-2" />
          Sign in with Google
        </Button>
        <Button className="w-full bg-[#1DA1F2] text-white flex justify-center items-center my-2">
          <TwitterIcon className="w-4 h-4 mr-2" />
          Sign in with Twitter
        </Button>
      </CardFooter>
    </Card>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
