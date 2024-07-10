import { EXAMPLES } from "../data.js";
import { useState} from "react";
import TabButton from "./TabButton.jsx"
import Section from './Section.jsx';
import Tabs from "./Tab.jsx";
export default function Examples(){

    const [selectedTopic,setSelectedTopic] = useState('');
    function handleClick(onSelected){
     setSelectedTopic(onSelected)
   }
    return(
        <Section title  ="Examples" id="examples">
          {/* <h2>Examples</h2> */}
          <menu>
          <TabButton onSelected={() =>handleClick('components')}>Components</TabButton>
          <TabButton onSelected={() => handleClick('jsx')}>JSX</TabButton>
          <TabButton onSelected={() => handleClick('props')}>Props</TabButton>
          <TabButton onSelected={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please Select any one</p>) : (<div id='tab-content'>
          <h3>
            {EXAMPLES[selectedTopic].title}
          </h3>
          <p>
            {EXAMPLES[selectedTopic].description}
          </p>
          <pre>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
        </div>)}
         
        </Section >
 
        
    );
}