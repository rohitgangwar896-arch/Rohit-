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
        // Physics-based movement logic using CharacterController or Rigidbody
    }

    [Rpc(RpcSources.Input, RpcTargets.StateAuthority)]
    public void RPC_FireWeapon(Vector3 aimDirection)
    {
        // Server-authoritative firing logic
        // 1. Raycast for hit detection
        // 2. Validate line of sight
        // 3. Apply damage to target
    }

    public void TakeDamage(int damage)
    {
        if (Object.HasStateAuthority)
        {
            Health -= damage;
            if (Health <= 0) Die();
        }
    }

    private void Die()
    {
        // Handle player elimination, drop loot, and transition to Spectator Mode
    }
}

public struct NetworkInputData : INetworkInput
{
    public Vector3 Direction;
    public bool IsFiring;
}
