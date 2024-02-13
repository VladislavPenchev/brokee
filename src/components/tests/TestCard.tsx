import { TestStatus } from '../../interface/common';
import {
  capitalizeFirstLetter,
  convertStringToArray,
} from '../../utils/helper';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Tooltip, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface Props {
  test: Test;
}

const TestCard = ({ test }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
      <Card className="px-6 py-4 mt-4 h-[750px]">
        <CardHeader className="py-4 flex items-center justify-center sm:h-[130px] h-[100px]">
          <img
            src={test.featured_image}
            alt="Linux Logo"
            className="w-20 h-20"
          />
          <CardTitle className="text-md text-center ml-2">
            {test?.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0 h-[500px]">
          <p className="mt-4 text-center h-[100px]">
            {test?.description_short}
          </p>
          <div className="mt-4 h-[150px]">
            <p>TECH STACK</p>
            {convertStringToArray(test?.tech_stack)
              .sort((a, b) => a.length - b.length)
              .map((techStack) => (
                <TooltipProvider key={`Math.random()-${techStack}`}>
                  <Tooltip>
                    <TooltipTrigger className="bg-yellow-300 m-1 py-1 px-3 rounded-full">
                      {techStack}
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ))}
          </div>
          <div className="mt-4 h-[150px]">
            <p>ROLES</p>
            {convertStringToArray(test?.tech_stack)
              .sort((a, b) => a.length - b.length)
              .map((techStack) => (
                <TooltipProvider key={`Math.random()-${techStack}`}>
                  <Tooltip>
                    <TooltipTrigger className="bg-green-300 m-1 py-1 px-3 rounded-full">
                      {techStack}
                    </TooltipTrigger>
                  </Tooltip>
                </TooltipProvider>
              ))}
          </div>

          <div className="mt-4 h-[100px]">
            <p>DIFFICULTY</p>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger
                  className={`bg-tooltip-${test.difficulty} m-1 py-1 px-3 rounded-full`}
                >
                  {capitalizeFirstLetter(test?.difficulty)}
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardContent>
        <CardFooter className="h-[150px]">
          <Button className="w-full hover:bg-green-300">
            {TestStatus[test?.status]}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TestCard;
