import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

export function ContactForm() {
  return (
    <div className="bg-[#964B00] text-white flex ">
      <section className="flex flex-col justify-stretch items-center w-1/2">
        <Typography variant="h3" className="text-center py-7">
          Contact Us
        </Typography>

        <SimpleRegistrationForm />
      </section>
      <div className="w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509603!2d144.95373531531592!3d-37.81720997975174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633075800758!5m2!1sen!2sus"
          className="w-full h-full"
          height={500}
          allowFullScreen="true"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="white">
        Sign Up
      </Typography>
      <Typography color="white" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="white" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-t-white-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="white" className="-mb-3">
            Your Email
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-white-200 focus:!border-t-white-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <div className="w-96">
            <Textarea label="Message" />
          </div>
        </div>

        <Button className="mt-6" fullWidth>
          sign up
        </Button>
        <Typography color="white" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-white-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
  );
}
