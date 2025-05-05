import '../styling/MyProjectTechStackBubbles.css';


///* TYPE DEFINITION *///
// - techStack: Array of strings representing the technologies in the stack
// - onRemove: Function to handle the removal of a technology from the stack
type MyProjectTechStackBubblesProps = {
    techStack: string[];
    onRemove: (tech: string, e: React.MouseEvent) => void;
};


///* FUNCTIONAL COMPONENT *///
const MyProjectTechStackBubbles = ({ techStack, onRemove }: MyProjectTechStackBubblesProps) => (
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
export default MyProjectTechStackBubbles;