export async function saveFile(file: any) { 
    if (!file.name) {
        throw new Error("File name required");
    }
 
    return {
        id: Date.now().toString(),
        name: file.name,
        size: file.size
    };
}

export async function fetchFile(id: string) {
    return {
        id,
        name: "example.txt"
    };
}

export async function removeFile(id: string) { 
    return true;
}
