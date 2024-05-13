class JournalEntry {
    static type = "JournalEntry";
    static detailsComponent = "JournalDetails.vue";

    get type() {
        return JournalEntry.type;
    }

    entryTitle = '';
    entryDate = '';
    entryCategory = '';
    entryDescription = '';
    entryContent = '';
    entryImg = '';

}