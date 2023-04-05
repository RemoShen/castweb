import React, { useState } from "react";
import BasicInfo from "./BasicInfo/BasicInfo";
import "./Userstudy.css";
import Submit from "./Submit/Submit";
import Video from "./Video/Video";
import KeyframeStudy from "./KeyframeStudy/KeyframeStudy";
import KfgroupStudy from "./KfgroupStudy/KfgroupStudy";
import Properties from "./Properties/Properties";
import Kftiming from "./Kftiming/Kftiming";
import IntroduceTutorial from "./IntroduceTutorial/IntroduceTutorial";
import IntroduceTraning from "./IntroduceTraning/IntroduceTraning";
import Option1 from "./Option1/Option1";
import Option2 from "./Option2/Option2";
import Option3 from "./Option3/Option3";
import Option4 from "./Option4/Option4";
import Option5 from "./Option5/Option5";
import Option6 from "./Option6/Option6";
import Option7 from "./Option7/Option7";
import IntroduceTest from "./IntroduceTest/IntroduceTest";
import ReproduceTutorial from "./ReproduceTutorial/ReproduceTutorial";
import ReproduceTraning from "./ReproduceTraning/ReproduceTraning";
import ReproduceTest from "./ReproduceTest/ReproduceTest";
import PanelInteraction from "./PanelInteraction/PanelInteraction";
import ChooseInteraction from "./ChooseInteraction/ChooseInteraction";
import TrackInteraction from "./TrackInteraction/TrackInteraction";
import Training1 from "./ReTraining/Training1/Training1";
import Training3 from "./ReTraining/Training3/Training3";
import Training4 from "./ReTraining/Training4/Training4";
import Test1 from "./ReTest/Test1/Test1";
import Test2 from "./ReTest/Test2/Test2";
import Test3 from "./ReTest/Test3/Test3";
import AuthorTutorial from "./AuthorTutorial/AuthorTutorial";
import AuthorTest from "./AuthorTest/AuthorTest";
import AuthorTutorialIt from "./AuthorTutorialIt/AuthorTutorialIt";
import AuthorRe1 from "./AuthorResult/AuthorRe1/AuthorRe1";
import AuthorRe2 from "./AuthorResult/AuthorRe2/AuthorRe2";
import AuthorRe3 from "./AuthorResult/AuthorRe3/AuthorRe3";
export default function Userstudy() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };
  const steps = [
    <BasicInfo onNext={handleNext} />,
    <Video onNext={handleNext} />,
    <IntroduceTutorial onNext={handleNext} />,
    <KeyframeStudy onNext={handleNext} />,
    <KfgroupStudy onNext={handleNext} />,
    <Properties onNext={handleNext} />,
    <Kftiming onNext={handleNext} />,
    <IntroduceTraning onNext={handleNext} />,
    <Option1 onNext={handleNext} />,
    <Option2 onNext={handleNext} />,
    <Option3 onNext={handleNext} />,
    <IntroduceTest onNext={handleNext} />,
    <Option4 onNext={handleNext} />,
    <Option5 onNext={handleNext} />,
    <Option6 onNext={handleNext} />,
    <Option7 onNext={handleNext} />,
    <ReproduceTutorial onNext={handleNext} />,
    <PanelInteraction onNext={handleNext} />,
    <ChooseInteraction onNext={handleNext} />,
    <TrackInteraction onNext={handleNext} />,
    <ReproduceTraning onNext={handleNext} />,
    <Training1 onNext={handleNext} />,
    <Training3 onNext={handleNext} />,
    <Training4 onNext={handleNext} />,
    <ReproduceTest onNext={handleNext} />,
    <Test1 onNext={handleNext} />,
    <Test2 onNext={handleNext} />,
    <Test3 onNext={handleNext} />,
    <AuthorTutorial onNext={handleNext} />,
    <AuthorTutorialIt onNext={handleNext} />,
    <AuthorTest onNext={handleNext} />,
    <AuthorRe1 onNext={handleNext} />,
    <AuthorRe2 onNext={handleNext} />,
    <AuthorRe3 onNext={handleNext} />,
    <Submit formData={formData} />,
  ];
  return steps[step - 1];
}
