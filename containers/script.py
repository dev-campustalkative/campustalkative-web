import os

def rename_files_to_lowercase(directory):
    if not os.path.exists(directory):
        print(f"Directory '{directory}' does not exist.")
        return

    file_list = os.listdir(directory)

    for filename in file_list:
        if filename.startswith('.'):
            continue  # Skip hidden files

        if os.path.isfile(os.path.join(directory, filename)):
            new_filename = filename.lower()

            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_filename)

            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")

if __name__ == "__main__":
    directory_path = "/Users/kehlani/Campustakative2.0/containers"
    rename_files_to_lowercase(directory_path)
