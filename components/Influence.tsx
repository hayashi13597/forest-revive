import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Image from "next/image";
import React from "react";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
const Influence = () => {
  return (
    <>
      <div className="flex justify-center w-screen mt-4">
        <section className="min-w-[800px]">
          <Card
            component="li"
            sx={{ minWidth: 300, minHeight: 500, flexGrow: 1 }}
          >
            <CardCover>
              <video
                controls
                loop
                muted={false}
                poster="/images/videoimage1.jpg"
              >
                <source src="/video/video.mp4" type="video/mp4" />
              </video>
            </CardCover>
          </Card>
        </section>
      </div>
    </>
  );
};

export default Influence;
