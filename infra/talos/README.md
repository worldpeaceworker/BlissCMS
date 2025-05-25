# Talos Configurations (infra/talos)

This directory contains Talos OS machine configurations for Kubernetes nodes.

**Key Features (Planned):**
- `controlplane/`: Machine configs for control plane nodes.
- `worker/`: Machine configs for worker nodes.
- Secure-by-default principles:
    - Read-only filesystem
    - No SSH access
    - Sealed Secrets for secret management
