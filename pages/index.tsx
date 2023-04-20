import Head from "next/head";

import LeftBar from "@/components/LeftBar";
import NavBar from "@/components/NavBar";
import RightBar from "@/components/RightBar";

import { motion } from "framer-motion";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dmytro Yurin Portfolio</title>
      </Head>
      <main
        className="w-full h-screen font-bodyFont bg-bodyColor text-textLight
      overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20
      scrollbar-thumb-textDark/60"
      >
        <NavBar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftBar />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <MainContent />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightBar />
          </motion.div>
        </div>
      </main>
    </>
  );
}
