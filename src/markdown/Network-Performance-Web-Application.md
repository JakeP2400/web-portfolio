---
title: "Network Performance of a Web Application"
date: "2026-03-03"
author: "Jake Pole"
---
# Network Performance

## Why do we need to ensure Web Applications perform well?

This is due to each system type having **saturation points**, this is where a service quality begins to deteriorate with more users and requests. As more users and more requests connect, the server can handle some concurrently (load), however as this begins to reach a systems full utilisation, it will begin to struggle, and then queuing different requests and causing tasks to jump on the CPU causing context-switching. Once a system beings to reach its saturation point, its latency will increase however the total work complete typically will level off, or potentially decrease.
In a real world application, we can focus on two different metrics:
* **Throughput**: The volume of work the service processes.
* **Latency**: The delay between a request being made, and the results appearing.

## Ways we can optimise the performance

### Horizontal scaling

Within DevOps, we can use Horizontal scaling, adding more servers to a resource pool, as opposed to one machine.
* **Load-balancing**: Acting like a sorting system, this distributes incoming traffic across multiple backend servers, reducing the throughput on each individual server.
* **DNS Round Robin**: This is giving a Domain Name multiple connected IP addresses. With the DNS server rotating between IP addresses, sharing the load across them.

### Latency Improvement

Improving latency involves improving speed and reducing distance. And by moving the content closer to the user allows for the speed to increase.

* **Cache**: Caching involves storing a copy for frequently accessed data within fast-accessed memory (such as RAM), loading the commonly accessed data quicker.
* **CDNs**: CDNs (Content Delivery Networks) such as Akamai, means to use "Edge Servers"* spread globally to being the data physically closer to the user. Reducing the travel time of the data causing a significant amount (estimated 85%) of global users to be within "one hop"** of an Akamai server.

*Edge server is a computing system which operates closer to the edge of a network, making it closer to the end-user.

**One hop meaning the data only passes through one network or network device.

## Measuring performance
To see if the optimisations are effective, tests must occur to view the data.
* **ApacheBench (ab)**: ApacheBench is used to measure how many concurrent requests per second a service can handle before failing.
