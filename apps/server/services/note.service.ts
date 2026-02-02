export async function fetchNotes() { 
    return [];
}

export async function saveNote(data: any) {
    if (!data.title) {
        throw new Error("Title is required");
    }

    return {
        id: Date.now(),
        title: data.title,
        content: data.content
    };
}
