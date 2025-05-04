import '../styling/MyProjectTechStackBubbles.css';


///* TYPE DEFINITION *///
// - techStack: Array of strings representing the technologies in the stack
// - onRemove: Function to handle the removal of a technology from the stack
type TechStackBubblesProps = {
    techStack: string[];
    onRemove: (tech: string, e: React.MouseEvent) => void;
};


///* FUNCTIONAL COMPONENT *///
const TechStackBubbles = ({ techStack, onRemove }: TechStackBubblesProps) => (
    <div className="my-project-techstack-bubbles">
        {techStack.map((tech, index) => (
            <div key={index} className="my-project-techstack-bubble">
                {tech}
                <button
                    type="button"
                    className="my-project-techstack-remove-bubble"
                    aria-label={`Remove ${tech}`}
                    onClick={(e) => onRemove(tech, e)}
                >
                    ✕
                </button>
            </div>
        ))}
    </div>
);


///* EXPORT *///
export default TechStackBubbles;