# Yodel Backend

## API Endpoints
```
```

## Database Schema
```
users/{userId}
  - username: String                     // Unique username for the user.
  - email: String                        // User's email address.
  - createdAt: Timestamp                 // Account creation date and time.
  - isPublic: Boolean                    // Flag to indicate if the account is public or private.
  - profilePictureUrl: String (optional) // URL to the user's profile picture.
  - bio: String (optional)               // Short biography or description about the user.
  - followersCount: Number               // Number of users following this user (for quick access/display).
  - followingCount: Number               // Number of users this user is following (for quick access/display).
  - integrationUserUUID: String          // UUID used for MusicAPI integration.

playlists/{playlistId}
  - name: String
  - description: String
  - totalItems: Number
  - coverPhotoUrl: String (optional)
  - createdAt: Timestamp
  - createdBy: Reference (users/{userId}) // Reference to the user who created the playlist.
  - likesCount: Number                    // Number of likes the playlist has received (for quick access/display).

songs/{songId}
  - name: String
  - album: Reference (albums/{albumId})               // Reference to the album document.
  - artists: Array of References (artists/{artistId}) // References to artist documents.
  - duration: Number (seconds)
  - imageUrl: String
  - isrc: String
  - previewUrl: String

playlistSongs/{playListSongId}
  - playlist: Reference (playlists/{playlistId})
  - song: Reference (songs/{songId})
  - createdAt: Timestamp                          // Time when song was added to the playlist.

artists/{artistId}
  - name: String

albums/{albumId}
  - name: String
  - artists: Array of References (artists/{artistId}) // Albums can have multiple artists.
  - totalItems: Number

likes/{likeId}
  - playlist: Reference (playlists/{playlistId}) // Reference to the liked playlist.
  - user: Reference (users/{userId})             // Reference to the user who liked the playlist.
  - createdAt: Timestamp                         // When the like was added.

follows/{followId}
  - follower: Reference (users/{userId})  // The user sending the follow request.
  - following: Reference (users/{userId}) // The user receiving the follow request.
  - createdAt: Timestamp                  // When the follow request was made or the follow was established.
  - status: String                        // "active" for accepted follows, "pending" for follow requests awaiting approval.
```
