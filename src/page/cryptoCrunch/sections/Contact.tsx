import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactString =
    "We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!";
  return (
    <section className="mx-4">
      <div className="space-y-5 flex flex-col justify-center items-center">
        <h4 className="section-title text-white">Contact Us</h4>
        <p className="section-description">{contactString}</p>
        <Button className="mt-10 mb-36 gradientBg text-sm shadow-md rounded-sm p-6 font-bold cursor-pointer">
          GET IN TOUCH
        </Button>
      </div>
    </section>
  );
};

export default Contact;
