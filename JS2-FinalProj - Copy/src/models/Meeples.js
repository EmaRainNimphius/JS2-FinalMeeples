class Meeples {
    static type = "Meeple";
    static detailsComponent = "MeepleDetails.vue";

    get type() {
        return Meeple.type;
    }

    meepleName = '';
    meepleAge = '';
    meepleGender = '';
    meepleRole = '';
    meepleDescription = '';

}