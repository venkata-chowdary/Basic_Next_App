export default function UserProfile({ params }) {
    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            {/* <Card className="w-full max-w-md">
                <CardHeader className="flex items-center flex-col">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center text-xl font-semibold">{profile.name}</CardTitle>
                    <p className="text-gray-500 text-sm">{profile.email}</p> */}
                    <p className="text-gray-500 text-sm">{params.profileId}</p>
                {/* </CardHeader>
                <CardContent>
                    <p className="text-center text-gray-700 mb-4">{profile.bio}</p>
                </CardContent>
            </Card> */}
        </div>
    );

}