import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return ( <div>
       <SignIn
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-blue-500 hover:bg-blue-600 text-sm normal-case",
          },
        }}
      />
  </div> 
   );
}