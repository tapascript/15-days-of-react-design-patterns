import CardWithSlots from "./CardWithSlots";

const CardWithSlotDemo = () => {
    return (
        <CardWithSlots
            header={<h3>User Profile</h3>}
            content={<p>Biography and details...</p>}
            footer={<button>Follow</button>}
        />
    );
};

export default CardWithSlotDemo;
