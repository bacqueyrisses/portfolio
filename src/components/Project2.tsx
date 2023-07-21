import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
export default function Project2 () {
          return (
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Create project</CardTitle>
                <CardDescription>Deploy your new project in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
bite
              </CardContent>
              <CardFooter className="flex justify-between">
                <button >Cancel</button>
                <button>Deploy</button>
              </CardFooter>
            </Card>
          )

}