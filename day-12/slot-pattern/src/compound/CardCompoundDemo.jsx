import CardCompound  from "./CardCompound";

const CardCompoundDemo = () => {
    return (
        <CardCompound>
            <CardCompound.Header>
                <h3>Title</h3>
            </CardCompound.Header>
            <CardCompound.Body>
                <p>Content...</p>
            </CardCompound.Body>
            <CardCompound.Actions>
                <button>Save</button>
            </CardCompound.Actions>
        </CardCompound>
    );
};

export default CardCompoundDemo;
