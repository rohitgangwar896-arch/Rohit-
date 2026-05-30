using UnityEngine;
using Fusion;

public class PlayerController : NetworkBehaviour
{
    [Networked] public int Health { get; set; }

    public override void FixedUpdateNetwork()
    {
        if (GetInput(out NetworkInputData data))
        {
            // Process movement and shooting based on server-authoritative input
            Move(data.Direction);
        }
    }

    private void Move(Vector3 direction)
    {
        // Physics-based movement logic
    }
}

public struct NetworkInputData : INetworkInput
{
    public Vector3 Direction;
    public bool IsFiring;
}
