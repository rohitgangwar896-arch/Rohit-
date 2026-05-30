using UnityEngine;
using Fusion;

public class VehicleSystem : NetworkBehaviour
{
    [Networked] public float Fuel { get; set; }

    public void EnterVehicle(PlayerController player)
    {
        // Logic for player entering car, bike, or boat
    }

    public override void FixedUpdateNetwork()
    {
        // Synchronized vehicle physics and movement
    }
}
