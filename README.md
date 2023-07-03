# Mystery Organism Simulator
## Description
    This program simulates DNA strands for a deep sea organism due to difficulty reaching real specimen. It then also tests their likelihood of survival based on a predetermined criteria.
## Features
    The following functions a pieced together to drive the program logic
### returnRandBase
    Used to rreturn a random DNA bases for addition to a DNA strand
### mockUpStrand
    Used to produce a full 15 base strand of DNA
### pAequorFactory
    Used to produce an instance of an organism. Includes a specimen number and a DNA strand, as well as the following methods used to compare and analyze and mutate the organisms attributes.
#### mutate
    Used to randomly change one base in the specimens DNA strand.
#### compareDNA
    Used to compare the specimens DNA strand with another specimens DNA strand. Returns the percentage of common bases.
#### willLikelySurvive
    Analyzes the specimens DNA strand and returns a conclusion on whether the specimen is likely to survive, based on the number of C and G bases in its DNA strand.