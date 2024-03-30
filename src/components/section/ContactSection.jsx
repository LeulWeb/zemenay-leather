import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";

import { FiPhoneCall } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export function ContactForm() {
  return (
    <div className="bg-[#964B00] text-white flex flex-col md:flex-row ">
      <section className="flex flex-col justify-stretch items-center w-full  md:w-1/2">
        <Typography variant="h3" className="text-center py-7">
          Contact Us
        </Typography>

        <SimpleRegistrationForm />
      </section>
      <div className="w-full md:w-1/2 bg-gray-200 flex flex-col items-center justify-center text-black  ">
        {/* phone  */}
        <div>
          <div className="flex items-center justify-center space-x-3 text-primary mt-5 py-3">
            <FiPhoneCall />
            <Typography variant="paragraph">Call Us</Typography>
          </div>
          <Typography variant="lead">
            <a href="tel:+2348123456789">+234 812 345 6789</a>
          </Typography>
          <Typography variant="lead">
            <a href="tel:+2348123456789">+234 812 345 6789</a>
          </Typography>
        </div>

        {/* email */}
        <div className="my-7">
          <div className="flex items-center justify-center space-x-3 text-primary mt-5 py-3">
            <FiMail />
            <Typography variant="paragraph" className="">
              Email Us
            </Typography>
          </div>
          <Typography variant="lead">
            <a href="mailto:leulwebsdev@gmail.com">leulwebsdev@gmail.com</a>
          </Typography>
        </div>

        {/* Links */}
        <Typography variant="paragraph" className="text-primary mt-5 ">
          Follow Us
        </Typography>
        <div className="flex space-x-3 items-center justify-center py-3">
          <FaTelegram size={32} />
          <FaInstagram size={32} />
          <FaTiktok size={32} />
          <FaFacebook size={32} />
        </div>
      </div>
    </div>
  );
}

export function SimpleRegistrationForm() {
  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="white">
        Contact Us
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
            <Typography variant="h6" color="white" className="mb-3">
              Your Message
            </Typography>
            <textarea
              name=""
              id=""
              className="w-full h-44 text-white bg-transparent   border-[1px] rounded-md outline-none border-gray-50"
            ></textarea>
          </div>
        </div>

        <Button className="mt-6" fullWidth>
          Send Message
        </Button>
      </form>
    </Card>
  );
}
