import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.ArrayList;

public class JSON_Writer {
    public static void main(String[] args) {
        Writer(1, 5, 8);
    }

    public static void Writer(int qtdCollections, int qtdPlaylistsPerCollections, int qtdMusicsPerPlaylist) {
        try {
            FileOutputStream file = new FileOutputStream("../src/components/js/json.js");
            PrintWriter pr = new PrintWriter(file);
            int idCollection = 1, idPlaylist = 1, idMusic = 1;
            ArrayList<String> collections = new ArrayList<>();
            collections.add("Spotify Playlist");
            ArrayList<String> playlists = new ArrayList<>();
            playlists.add("Rock");
            playlists.add("Axe");
            playlists.add("Pagode");
            playlists.add("Pop");
            playlists.add("MPB");
            
            pr.println("export const collections = [{");

            for(int c = 0; c < qtdCollections; c++) {
                pr.println("    id: " + idCollection + ",");
                pr.println("    name: '" + collections.get(c) + "',");
                idCollection++;
                for(int p = 0; p < qtdPlaylistsPerCollections; p++) {
                    if(p == 0) pr.println("    playlistsList: [{");
                    else pr.println("    ,{");
                    pr.println("        id: " + idPlaylist + ",");
                    pr.println("        name: '" + playlists.get(p) + "',");
                    pr.println("        desc: 'Lorem ipsum dolor',");
                    pr.println("        cover: './assets/img/capa-album.png',");
                    idPlaylist++;
                    for(int m = 0; m < qtdMusicsPerPlaylist; m++) {
                        if(m == 0) pr.println("        musics: [{");
                        else pr.println("                            ,{");
                        pr.println("                                id: " + idMusic + ",");
                        pr.println("                                musicname: 'Music " + idMusic + "',");
                        pr.println("                                author: 'Author A',");
                        pr.println("                                album: '" + playlists.get(p) + " 1',");
                        pr.println("                                img: './assets/audio/music.mp3'");
                        idMusic++;
                        pr.println("                            }");
                    }
                pr.println("                            ]");
                pr.println("    }");    
                }
                pr.println("    ]");
            }
            pr.println("}]");

            pr.println("export default collections;");
            /*
            export const collections = [{
                name: 'Spotify Playlists',
                playlistsList: [{
                        id: 1,
                        name: 'Rock',
                        desc: 'Lorem ipsum',
                        cover: './assets/img/capa-album.png',
                        musics: [{
                                id: 1,
                                musicname: 'Music 1',
                                author: 'Author A',
                                album: 'Rock 1',
                                src: './assets/audio/music.mp3'
                            }]
                    }
                ]}
            */
            pr.close();
            file.close();

        } catch (Exception e) {
            System.out.println("Error reading file");
        }
    }
}