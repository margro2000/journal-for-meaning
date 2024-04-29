import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'
import { Typewriter } from 'nextjs-simple-typewriter'

const exampleMessages = [
  {
    heading: 'Explain technical concepts',
    message: `What is a "serverless function"?`
  },
  {
    heading: 'Summarize an article',
    message: 'Summarize the following article for a 2nd grader: \n'
  },
  {
    heading: 'Draft an email',
    message: `Draft an email to my boss about the following: \n`
  }
]

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Journal and be <strong>heard</strong> with {" "}
        <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          className="font-bold hover:underline bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          rel="noreferrer"
        >
          Personalized Prompts
        </a>
        
        <div className="text-2xl">
          <br />
        <Typewriter
            words={['Hey, how are you feeling today?', 'What are you greatful for today?', 'Where drives your spirituality?', 'Reflect on how far you have moved towards your goals you set last month']}
            loop={1000000}
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
</div>
<br/>
</p>
<p className="leading-normal text-muted-foreground text-center">
          Connect with yourself and God today by journaling with personalized prompts to help expand and focus your thinking. 
         </p>

         <p className="leading-normal text-muted-foreground text-center">
<strong>Listen to Gods voice and boldy enter into the unknown</strong>.
         </p>
         
      </div>
    </div>
  )
}
