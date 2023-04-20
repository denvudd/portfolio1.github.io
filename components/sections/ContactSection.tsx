/* eslint-disable react/no-unescaped-entities */
import BaseButton from "../UI/BaseButton";
const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col
      gap-4 items-center justify-center"
    >
      <p
        className="font-titleFont text-lg text-textGreen font-semibold flex
      items-center tracking-wide"
      >
        04. What's Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get in Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <a href="mailto:dmitry.yurin2020@gmail.com">
        <BaseButton onClick={() => console.log("clicked")}>Say Hello</BaseButton>
      </a>
    </section>
  );
};

export default ContactSection;
