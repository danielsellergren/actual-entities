# The Use of Actual Entities in Artificial Intelligence

## Inspiration

Actual Entities are a philosophically-inspired theory in Artificial Intelligence, taken from the writings of Alfred North Whitehead. In much the same way that genetic algorithms are devised from a simplification and extrapolation of biological evolution, actual entities are derived from Whitehead's "process philosophy", most notably his treatise *Process and Reality*. You can read more about the historical and philosophical background of Actual Entities on the History page.

## Representation in Computational Systems

In process philosophy, Actual Entities are processes which are change according to their interaction with other entities in the universe. One actual entity "prehends" another, and based on the attributes of the prehended entity and the "prehension function" of the prehending entity, can changes its own attributes in such a way that it leads them to a final desired state of concretion.

In computer science, AEs are represented as objects with critical attributes (CAs) and a prehension function.

## Data Representation

The critical attributes can be thought of as an n-tuple of data which determines its position in n-dimensional space. This space does not have to be physical x, y, z positions but they often are.

    <0.28, 0.13, 1.38, 'red', 'square', 2.3> [LaTex?]
    
This is one critical difference between AEs and other artificially intelligence agents. In Actual Entities, the objets themselves are the data. Data is looking at other data to determine how to react.

## Algorithm Overview

The basic algorithm is extremely simple.

    while the convergence criteria has not been met
        randomly select two AEs
        choose one to be the prehender and one to be the prehendee
        call the prehension function
            update the prehending entity's critical attributes
            
The entire process continues until whatever convergence criteria has been reached. This could be a very complex pattern that is desired, or as simple as a total number of prehensions that have occurred.

Two AEs are chosen, with one designated as the prehender (the subjective entity, looking out at another) and the other designated as the prehendee (the objective entity, being observed by another).

The prehension function of the prehender is used to analyze the critical attributes (data) of the prehendee, and then make a decision as to how to update its own critical attributes based on what it has experienced.

### Prehension Function

The prehension function is the most important and most difficult part of creating an AE system. Along with the representation of data, it determines what problem is going to be solved or which system is going to be modeled.

The prehension function can be the same for all AEs, vary between individual AEs, be determined by the 'type' or 'class' of AE, or be determined by spatially dependent rules given by Eternal Objects. It is the main function that looks at the data provided by the prehendee and makes the decision as to how to react and whether to change the prehender's critical attributes.

An example of a very simple prehension function would be one that just looks at the distance between the prehender and prehendee. If they are less than a certain distance away, then the prehender would update its critical attributes to be more like the critical attributes of the prehendee. This would create a very simple clustering algorithm that could be used to push all entities toward a central area.

This could be expanded by adding an inner threshold, in which a different action takes place if entities are too close, or by adding an element of 'team' based interaction in which the prehension function is different depending on which 'team' both entities are on.

### Convergence

Convergence refers to a desired end state for the entire system. In process philosophy, the AEs are processes trying to get to a 'satisfied' end state. In our computational model, convergence is the point where the algorithm comes to an end. This state is checked before each iteration of the main algorithm, and if it has been reached then the simulation ends.

## Areas of Usage

Actual Entities have been successfully used to solve optimization problems, local minima and maxima calculations, swarming simulations, clustering and data classification, and other problems in artificial intelligence and data mining. They can also be used to create AI for game simulations. The universe can either have its rules set from the very beginning and then play itself out uninterrupted or could be affected on the fly by a godlike-entity. With the infinite configurations of data representation and prehension functions, the possibilities are endless.

## Conclusion

Actual Entities are extremely versatile and interesting objects in the field of artificial intelligence. It is my hope that they will continue to be researched and that new areas of discovery will continue to open up. Please check out the demo page to play with some very simple implementations of these theories. This text will be updated from time to time, and the demos will continue to grow as I have opportunities to create them.

## References

1. Pidaparti, R. M., Primeaux, D., & Saunders, B., "Modeling and Simulation of Nanoscale Self-Assembly Structures".
2. Primeaux, D. & Saunders, B., "Finding Global and Local Maxima in 3D Space Using Swarm-like Behavior in a Colony of Prehending Entities".
3. Primeaux, D., "Competing swarms of self-classifying entities with regional extension through feature space", *Partial Draft*.