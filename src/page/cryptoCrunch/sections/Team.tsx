import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Team = () => {
  const joinData =
    "Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone.";
  const gravityTeamData =
    "As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so!";
  return (
    <section className="mx-4 text-white flex justify-center items-center h-screen relative">
      <div className="flex flex-col justify-center md:flex-row z-10">
        <h4 className="text-4xl font-medium w-full text-center pt-20">Join Gravity Team</h4>
        <div className="space-y-10 p-4 px-20">
          <p className="text-center md:text-left">{joinData}</p>
          <p className="text-center md:text-left">{gravityTeamData}</p>
          <Button>
            Lean more about working with us{" "}
            <span>
              <ArrowRight />
            </span>
          </Button>
        </div>
      </div>
      <span className="bg-blue-500 h-50 w-100 rounded-full absolute blur-3xl -left-20">
      </span>
      <span className="bg-orange-200 h-50 w-50 rounded-full absolute blur-3xl left-40 top-85"></span>

    </section>
  );
};
