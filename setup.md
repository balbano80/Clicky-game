
Folder/Component structure
    - App
        - Navbar
            - Brand
            - Direction/Status
            - Score + Top Score
        - Header
        - Body
            - Cards/Images
        - Footer

Pseudo
    - On load
        - display images from stored image objects randomly
        - score and topscore set to 0
    - Click Image
        - If image had not been clicked before:
            - score increment
                - check against topscore
                - if higher, topscore = score
            - set image clicked setting to true
            - re-display from array of images randomly
        - if image had already been clicked(setting = true):
            - user loses
                - set score back to 0 
                - reset all images to unclicked(false setting)
