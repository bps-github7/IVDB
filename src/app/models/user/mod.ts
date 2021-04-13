export interface Mod {
  /*
Nomintated Mod by users, this user will
enjoy eleveated features on the site (powers)

that make them much like the admin, but not nearly
as strong. for example:

Admin can delete posts, games, entire forums, forum or game info.
Mod have a similar effect, but over a smaller area- forum, comment section.

Moderators who prove themselves consistent and effective
in their job of moderating the site, will see themselves gain
more and more admin features until they assume the role or drop out.

  */
    displayName: string,
    //reference to a user account ->

    since: number

}