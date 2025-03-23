---
sidebar_position: 1
hide_table_of_contents: true
title: WMAC 2025 Takeaways
slug: 2025_takeaway
---

# WMAC 2025: Key Takeaways

## Thank You!
Thank you to all in-person and virtual participants who joined WMAC 2025. We had a great time in Philadelphia with 7 inspiring talks and 14 posters fully leveraging the space, with insightful break-time conversations throughout the workshop room. Special thanks to the presenters and participants who traveled across the globe to attend this workshop. Please take a moment to help us by filling out a brief survey: [here](/2025-survey).

## Workshop Highlights

### Invited Talks
We enjoyed four thought-provoking invited talks from leading researchers:
- **Katia Sycara** (Carnegie Mellon University): *LLM based Teamwork: Promises and Challenges*
- **Kyunghyun Cho** (New York University): *A multi-modal, multi-agent system - A minimalistic framework to study multi-agent systems*
- **Vivian Chen** (National Taiwan University): *Optimizing Interaction and Intelligence --- Multi-Agent Simulation and Collaboration for Personalized Marketing and Advanced Reasoning*
- **Zora Wang** (Carnegie Mellon University): *Building TheAgentCompany: Benchmarking Consequential Real-World Tasks and Adaptive Knowledge Learning*

### Oral Presentations
Three excellent papers were selected for oral presentation:
1. [Improving Multi-Agent Debate with Sparse Communication Topology](https://arxiv.org/pdf/2406.11776) - Yunxuan Li et al.
2. [Talking Vehicles: Cooperative Driving via Natural Language](/2025_artifacts/talking_vehicles_cooperative_driving_via_natural_language.pdf) - Jiaxun Cui et al.
3. [Aligning Compound AI Systems via System-level DPO](/2025_artifacts/aligning_compound_ai_systems_via_system_level_dpo.pdf) - Xiangwen Wang et al.

### Poster Session
We featured 14 diverse posters covering various aspects of LLM-based multi-agent collaboration. Poster presentations included research on inventory management systems, rumor spreading simulation, patient simulation, visual content generation, and many other innovative applications of multi-agent technology.

## Key Takeaways from Invited Talks

### LLM-Based Teamwork: Promises and Challenges (Katia Sycara)

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="/2025_talks/screen_talk_1.png" alt="Katia Sycara's presentation slide" style={{maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', border: '1px solid #e5e9f0'}} />
</div>

- **LLM-Based Teamwork Enhances Collaboration but Has Limitations:**
  Large Language Models (LLMs) effectively facilitate teamwork among AI agents, showing performance comparable to state-of-the-art multi-agent reinforcement learning methods. However, challenges persist, including systematic failures related to long-context handling and hallucinations, which can be mitigated by integrating mechanisms for memory and belief tracking.
- **Theory of Mind (ToM) in LLMs Is Present but Limited:**
  While LLMs exhibit some Theory of Mind capabilities—such as understanding high-order beliefs, multi-party communication, and false beliefs—these capabilities are limited. The researchers developed interactive benchmarks beyond traditional ToM tests, demonstrating the potential but also highlighting gaps that remain for sophisticated cognitive modeling in AI systems.
- **LangGround Enables Human-Interpretable AI Communication:**
  The presentation introduced LangGround, a reinforcement learning framework designed to align multi-agent communication with human language, allowing AI agents to collaborate effectively with humans in ad-hoc situations. LangGround achieves faster convergence, better generalization, and enables AI agents to interpret and generate natural language messages accurately, bridging the gap between human and AI team members.


### A Multi-modal, Multi-turn, Multi-agent System (Kyunghyun Cho)

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="/2025_talks/screen_talk_2.png" alt="Kyunghyun Cho's presentation slide" style={{maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', border: '1px solid #e5e9f0'}} />
</div>

- **Minimalistic Multi-Agent Framework:**
  Cho's talk introduces a minimalistic framework enables the study of multi-agent systems through a referential game, involving asymmetric agents where one perceives visual inputs without memory, and the other utilizes language processing with memory. This setup provides insights into multi-modal perception, adaptive communication, and collaborative problem-solving.
- **Adaptive Communication Resolves Ambiguity:**
  Agents dynamically adjust the length and complexity of their conversations based on task difficulty, effectively resolving ambiguity and uncertainty over multiple turns. This capability emerges naturally from the end-to-end learning process and is measurable through predictive entropy, indicating increasing confidence over conversational exchanges.
- **End-to-End Learning is Crucial:**
  Jointly training sender and receiver agents through end-to-end reinforcement and supervised learning significantly outperforms training individual agents separately. This underscores the importance of mutual adaptation and coordinated training in multi-agent systems to achieve optimal collaborative performance.


### Optimizing Interaction and Intelligence: Multi-Agent Simulation and Collaboration for Personalized Marketing and Advanced Reasoning (Vivian Chen)

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="/2025_talks/screen_talk_3.png" alt="Vivian Chen's presentation slide" style={{maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', border: '1px solid #e5e9f0'}} />
</div>

- **Multi-Agent Simulation Enhances Personalized Marketing:**
  The presentation highlighted a multi-agent simulation framework designed for personalized marketing, utilizing agents to synthesize dialogues that replicate salesperson strategies. This approach involves teaching large language models (LLMs) explicit sales strategies via Chain-of-Thought (CoT) fine-tuning, allowing agents to better detect customer intentions, smoothly transition between casual and task-oriented dialogues, and effectively engage customers without aggressive behaviors.
- **Nudging Improves Complex Reasoning in LLMs:**
  For complex math reasoning tasks, introducing a "nudging" agent significantly improves performance. This agent collaborates with the primary reasoning agent, providing step-by-step evaluation and guidance within single responses. The nudging model helps the main model to extend its reasoning process, thereby improving accuracy in challenging math problems beyond standard methods that merely sample multiple responses.
- **Training on Extended Reasoning Boosts Model Performance:**
  The presentation demonstrated that training LLMs using long-form, stepwise reasoning (Long-CoT) synthesized by multi-agent collaboration substantially enhances their native reasoning capabilities. Models fine-tuned on Long-CoT data consistently outperform traditional inference-time methods, achieving higher accuracy and efficiency, even with smaller-sized models, underscoring the value of deeper reasoning practices embedded directly into the training pipeline.


### Building TheAgentCompany: Benchmarking Consequential Real-World Tasks and Adaptive Knowledge Learning (Zora Wang)

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="/2025_talks/screen_talk_4.png" alt="Zora Wang's presentation slide" style={{maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', border: '1px solid #e5e9f0'}} />
</div>

- **Real-World Task Benchmarking for AI Agents:**
  The presentation emphasized building an agent benchmarking platform ("The Agent Company") that evaluates AI agents across diverse, consequential real-world digital tasks such as finance, software engineering, and administrative duties. Claude emerged as the highest-performing agent overall, but common agent pitfalls such as poor UI handling and lack of social interaction skills were also highlighted.
- **Specialized Knowledge and Skill Development:**
  Introducing specialized procedural knowledge significantly enhanced agent performance. Agents leveraging structured workflow memories achieved over 51% higher success rates and improved task efficiency, highlighting the value of systematically encoding procedural expertise and progressively building complex skills.
- **Collaborative Agent Interaction Boosts Performance:**
  Collaborative frameworks, exemplified by CowPilot, demonstrated that agents working cooperatively achieved nearly 47% better task completion rates. Effective collaboration, even with minimal supervisory interaction, underscores the importance of enabling cross-agent knowledge exchange and coordination to enhance overall productivity in complex digital environments.

### Best Paper Award - Improving Multi-Agent Debate with Sparse Communication Topology

<div style={{textAlign: 'center', margin: '1.5rem 0'}}>
  <img src="/2025_talks/screen_talk_best_oral.png" alt="Best Paper presentation slide" style={{maxWidth: '90%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)', border: '1px solid #e5e9f0'}} />
</div>

- **Sparse Communication Topology Enhances Efficiency:**
  Sparse communication topologies significantly reduce inference costs (approximately 40%) while maintaining or slightly improving the performance of Multi-Agent Debate (MAD) systems. This means sparse topologies offer a practical trade-off between communication complexity and solution quality.
- **Adaptive Topologies Based on Context:**
  The effectiveness of sparse communication topologies depends on the correctness of the agent context. In situations where many agents produce incorrect answers, sparse topologies help prevent incorrect consensus by limiting misleading influences. Conversely, when most agents are correct, denser topologies can reinforce accuracy.
- **Strategic Assignment of Agent Capabilities:**
  Positioning stronger LLM agents at highly connected, central nodes within sparse topologies further enhances overall debate performance. This strategic placement leverages agent strengths to maximize the benefits derived from limited but effective communication channels.


## Resources
- All presentations are available for download on our website
- Workshop recordings will be shared with registered participants
- Papers and artifacts can be accessed at [multiagents.org/workshop](https://multiagents.org/workshop)

## Next Steps
- Join our community mailing list for updates on future workshops
- Consider submitting to our next workshop, special issues and other events
- Explore collaboration opportunities with fellow participants

## Photo Gallery

Here are some highlights from WMAC 2025:

<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', margin: '2rem 0'}}>
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8676.jpg" alt="Morning in Philadelphia" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
  
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8682.jpg" alt="Screen" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
  
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8692.jpg" alt="Poster presentation 1" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
  
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8693.jpg" alt="Poster presentation 2" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
  
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8708.jpg" alt="Panel discussion" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
  <div style={{maxWidth: '45%', textAlign: 'center'}}>
    <img src="/2025_photos/IMG_8706.jpg" alt="Break time" style={{width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.15)'}} />
  </div>
</div>
