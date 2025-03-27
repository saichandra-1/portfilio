import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { CardSpotlightDemo } from "./components/CardSpotlightDemo";
import { Gridbackground } from "./components/Gridbackground";
import { SparklesPreview } from "./components/SparklesPreview";


export default function Home() {
  return (
    <div>
        <Gridbackground />
        <SparklesPreview/>
        <BackgroundLinesDemo/>
        <CardSpotlightDemo/>
    </div>
  );
}
