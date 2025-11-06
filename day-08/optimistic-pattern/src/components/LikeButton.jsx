
import { startTransition, useOptimistic, useState } from "react";

async function sendLikeToServer(postId) {
    // simulate network
    await new Promise((r) => setTimeout(r, 700));

    if (Math.random() < 0.2) throw new Error("Network failed");
    console.log(`Sent a like for the post id ${postId}`);
    return { success: true };
}

export default function LikeButton({ postId, initialLikes = 0 }) {
    // the "real" source of truth for likes (committed)
    const [likes, setLikes] = useState(initialLikes);
    // optimistic state + updater function
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
        likes,
        (currentLikes, delta) => currentLikes + delta
    );

    const handleLike = async () => {
        // 1) Apply optimistic change *immediately*
        addOptimisticLike(1);

        // 2) Start server call in low priority to avoid blocking UI

        try {
            await sendLikeToServer(postId);
            // On success, commit the real state update:
            // IMPORTANT: update the real state so optimistic snapshot eventually matches
            setLikes((prev) => prev + 1);
        } catch (err) {
            // On error, rollback the real state (or trigger a refetch)
            // Because we never incremented likes (real), just leave likes unchanged
            // But we should show an error to user:
            console.error("Like failed:", err);
            // Optionally: show toast or set an error state
            // And — to force the optimistic view to refresh and reflect real state — call setLikes to current value
            setLikes((s) => s); // no-op but will cause optimistic to reflect the committed value
            // Or you can trigger a re-fetch of the post state
        }
    };

    return (
        <div className="flex">
            <button onClick={handleLike}>❤️ {optimisticLikes}</button>
            <button onClick={() => startTransition(async () => handleLike())}>
                ❤️ {optimisticLikes}
            </button>
        </div>
    );
}
