# Observability Strategy & Grafana Dashboards (docs/observability)

This directory outlines the planned observability stack for the BlissCMS platform and serves as the designated location for storing version-controlled Grafana dashboard JSON models.

## Planned Observability Stack

A comprehensive observability stack is planned to provide insights into logs, metrics, traces, and continuous profiling. The key components include:

1.  **OpenTelemetry SDK**:
    *   **Integration**: To be integrated into core applications:
        *   `apps/admin` (Next.js)
        *   `apps/cms-api` (NestJS)
        *   `apps/keystone` (KeystoneJS)
    *   **Purpose**: To generate and export traces, metrics, and logs from applications.

2.  **Loki**:
    *   **Installation**: Via Helm chart into the Kubernetes cluster.
    *   **Purpose**: Log aggregation and querying.

3.  **Tempo**:
    *   **Installation**: Via Helm chart into the Kubernetes cluster.
    *   **Purpose**: Distributed tracing backend.

4.  **Prometheus**:
    *   **Installation**: Via Helm chart into the Kubernetes cluster.
    *   **Purpose**: Metrics collection and alerting.

5.  **Grafana**:
    *   **Installation**: Via Helm chart into the Kubernetes cluster.
    *   **Purpose**: Visualization of logs, metrics, and traces. Dashboards defined for key services will be stored as JSON models in this directory.

6.  **Pixie**:
    *   **Installation**: Into the Kubernetes cluster.
    *   **Purpose**: Auto-instrumentation for eBPF-based application performance monitoring and tracing, particularly useful for service maps and resource utilization.

7.  **Parca**:
    *   **Installation**: Into the Kubernetes cluster.
    *   **Purpose**: Continuous profiling for CPU and memory, helping identify performance bottlenecks.

## Grafana Dashboards

Exported JSON models of Grafana dashboards used to monitor the applications and infrastructure will be stored here. This allows for version control and easy sharing/recreation of dashboards.

---

This setup aims to provide a holistic view of the system's health and performance, facilitating debugging, monitoring, and operational excellence.
