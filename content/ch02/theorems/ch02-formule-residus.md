---
id: ch02-formule-residus
type: theorem
chapter: 2
title: Formule des résidus (Cauchy, 1826)
ref: Théorème II.5.1
page: 47
importance: 3
depends: [ch02-cauchy-simplement-connexe, ch02-invariance-homotopie-integrale, ch02-laurent-developpement, ch01-integrale-primitive, ch02-indice-def, ch02-residu-def, ch02-pole-meromorphe-def, ch02-homotopie-simplement-connexe, ch02-discret-accumulation-localement-fini-def]
tags: [residus, formule des residus, indice, lacet, simplement connexe, partie polaire, calcul d'integrales]
---
## Intuition

> 💡 Intégrer une fonction méromorphe le long d'un lacet, c'est **compter** : chaque pôle $s$ contribue son résidu $\mathrm{res}_s(f)$, multiplié par le nombre de tours $\Ind_s(\gamma)$ que le lacet fait autour de lui. Tout le reste de la fonction (sa partie holomorphe) ne contribue rien, par le théorème de Cauchy. Une intégrale « globale » se ramène ainsi à des calculs **locaux** de coefficients de Laurent.

Image mentale : on retranche de $f$ ses parties polaires $Q_s$ (les termes en $\frac1{(z-s)^n}$ de ses développements de Laurent). Ce qui reste est holomorphe sur tout $\Omega$, donc d'intégrale nulle. Quant aux $Q_s$, seul le terme $\frac{a_{-1}}{z-s}$ n'a pas de primitive, et son intégrale vaut $2i\pi\,a_{-1}\,\Ind_s(\gamma)$.

La formule généralise à la fois le théorème de Cauchy ([[ch02-cauchy-simplement-connexe]] : pas de pôle, intégrale nulle) et la formule intégrale de Cauchy (prendre $\frac{f(w)}{w-z}$).

Notations : $\Omega$ ouvert de $\C$ ; **simplement connexe** = connexe et tout lacet y est homotope à un lacet constant ([[ch02-homotopie-simplement-connexe]]) ; $\mathcal M(\Omega)$ et $\mathcal P(f,\Omega)$ (ensemble des pôles de $f$ dans $\Omega$) : [[ch02-pole-meromorphe-def]] ; $\mathrm{res}_s(f)$ : [[ch02-residu-def]] ; $\Ind_s(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dz}{z-s}$ : [[ch02-indice-def]].

## Énoncé

**Théorème (poly, Théorème II.5.1, p. 47) — Formule des résidus (Cauchy, 1826).** On suppose que $\Omega$ est un ouvert simplement connexe. Soit $f$ une fonction méromorphe sur $\Omega$. Soit $\gamma$ un lacet inclus dans $\Omega\setminus\mathcal P(f,\Omega)$. Alors,
$$
\frac1{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in\mathcal P(f,\Omega)}\mathrm{res}_s(f)\,\Ind_s(\gamma).
$$
La somme est **à support fini** : seuls un nombre fini de pôles ont un indice non nul ([[ch02-support-fini-remarque]], Remarque II.5.2). Par ailleurs (Remarque II.5.3, [[ch02-residus-hypothese-homotope-remarque]]), l'hypothèse « $\Omega$ simplement connexe » peut être remplacée par « le lacet $\gamma$ est homotope à un lacet constant dans $\Omega$ » : c'est ce que la preuve utilise.

(Convention : $f$ est prolongée holomorphiquement à ses fausses singularités, de sorte que $f$ est holomorphe sur $\Omega\setminus\mathcal P(f,\Omega)$ et continue sur l'image de $\gamma$ ; l'intégrale a donc un sens.)

## Hypothèses

### H1 — $\Omega$ simplement connexe (ou : $\gamma$ homotope à un lacet constant dans $\Omega$)

**Rôle.** Deux usages : (a) la partie « holomorphe » $f-\sum_sQ_s$ a une intégrale nulle sur $\gamma$ par invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) ; (b) l'indice est nul en tout point hors de $\Omega$ (ou hors de l'ouvert auxiliaire $\Omega'$), ce qui rend la somme finie et permet de se ramener à un nombre fini de pôles.

**Si on la retire.** $\Omega=\C^\times$ (non simplement connexe), $f(z)=\frac1z$ : $f$ est holomorphe sur $\Omega$, donc méromorphe **sans pôle** dans $\Omega$ ($\mathcal P(f,\Omega)=\emptyset$, car $0\notin\Omega$). Pour $\gamma=C(0,1)$ : $\frac1{2i\pi}\int_\gamma\frac{dz}z=\Ind_0(\gamma)=1$ ([[ch02-indice-cercle]]), alors que le membre de droite est une somme vide, égale à $0$. Le « trou » $0$ de $\Omega$ se comporte comme une singularité cachée.

### H2 — $f$ méromorphe sur $\Omega$

**Rôle.** Elle fournit en chaque pôle un développement de Laurent à partie polaire **finie** $Q_s$ ([[ch02-laurent-developpement]]), et la locale finitude des pôles ([[ch02-discret-accumulation-localement-fini-def]]) assure qu'un compact n'en contient qu'un nombre fini ; hors des pôles, $f$ est holomorphe.

**Si on la retire.**
* $\Omega=\C$, $f(z)=\bar z$ (continue, sans pôle, non holomorphe) : $\int_{C(0,1)}\bar z\,dz=\int_0^{2\pi}e^{-i\theta}\,ie^{i\theta}\,d\theta=2i\pi\neq0$.
* $\Omega=\C$, $f(z)=e^{1/z}$ (holomorphe sur $\C^\times$, singularité essentielle en $0$, donc non méromorphe sur $\C$ ; elle n'a aucun pôle) : la série $e^{1/z}=\sum_{k\ge0}\frac{z^{-k}}{k!}$ converge normalement sur $C(0,1)$ et s'intègre terme à terme, seul $k=1$ contribue : $\int_{C(0,1)}e^{1/z}\,dz=2i\pi\neq0$. (Le résultat reste vrai avec le coefficient $a_{-1}=1$ de la série de Laurent bilatère, Exercice II.7.4, [[ch02-laurent-couronne-cauchy]], mais pas avec la définition de $\mathcal P(f,\Omega)$.)

### H3 — $\gamma$ est un lacet de $\Omega$ ne passant par aucun pôle

**Rôle.** Pour que $\int_\gamma f$ et chaque $\Ind_s(\gamma)$ soient définis ($f$ continue sur l'image $\Gamma$ de $\gamma$, et $s\notin\Gamma$), et pour que le terme $\frac{a_{-1}}{z-s}$ s'intègre en $2i\pi\,a_{-1}\Ind_s(\gamma)$ ; le fait que $\gamma$ soit **fermé** sert à annuler les intégrales des termes ayant une primitive ([[ch01-integrale-primitive]]).

**Si on la retire.** *Lacet passant par un pôle* : $f(z)=\frac1{z-1}$, $\gamma=C(0,1)$ ; avec $z=e^{i\theta}$, $\frac{ie^{i\theta}}{e^{i\theta}-1}=\frac{e^{i\theta/2}}{2\sin(\theta/2)}$, dont la partie réelle $\frac{\cos(\theta/2)}{2\sin(\theta/2)}\sim\frac1\theta$ en $0^+$ n'est pas intégrable : l'intégrale n'existe pas. *Chemin non fermé* : le demi-cercle $\theta\mapsto e^{i\theta}$, $\theta\in[0,\pi]$, donne $\int\frac{dz}z=i\pi$, qui n'est pas de la forme $2i\pi\times$ (entier) : l'indice n'a pas de sens et la formule non plus.

## Idée de la preuve

On se ramène à un nombre fini de pôles $S$ en remplaçant $\Omega$ par une réunion finie $\Omega'$ de disques contenant l'image d'une homotopie de $\gamma$ à un lacet constant (les pôles hors de $\Omega'$ ont un indice nul). On retranche à $f$ ses parties polaires $Q_s$, $s\in S$ : $f-\sum_sQ_s$ est holomorphe sur $\Omega'$, d'intégrale nulle sur $\gamma$ par invariance par homotopie. Enfin $\int_\gamma Q_s=2i\pi\,a^{(s)}_{-1}\Ind_s(\gamma)$, les termes $(z-s)^n$, $n\le-2$, ayant une primitive.

## Preuve

On prolonge $f$ à ses fausses singularités : $f$ est holomorphe sur $\Omega\setminus\mathcal P(f,\Omega)$, et les pôles forment une partie localement finie de $\Omega$ (ils sont contenus dans la partie localement finie $P$ de la définition de la méromorphie, [[ch02-pole-meromorphe-def]]). On note $\Gamma=\gamma([0,1])$, compact contenu dans $\Omega\setminus\mathcal P(f,\Omega)$.

**Étape 1 : réduction à un nombre fini de pôles.** Le lacet $\gamma$ est homotope à un lacet constant dans $\Omega$ (car $\Omega$ est simplement connexe, [[ch02-homotopie-simplement-connexe]]) ; soit $\tilde\gamma:[0,1]^2\to\Omega$ une telle homotopie de lacets. Son image $K=\tilde\gamma([0,1]^2)$ est compacte (image continue d'un compact) et contient $\Gamma$. Pour tout $z\in K$, soit $D_z$ un disque ouvert de centre $z$ dont l'adhérence $\bar D_z$ est incluse dans $\Omega$ ($\Omega$ est ouvert). On recouvre le compact $K$ par les $D_z$ et on en extrait un sous-recouvrement fini :
$$
K\subset\bigcup_{i=1}^mD_{z_i}=:\Omega' .
$$
* $\Omega'$ est un ouvert contenant $K$, donc $\tilde\gamma$ est à valeurs dans $\Omega'$ : **le lacet $\gamma$ est homotope à un lacet constant dans $\Omega'$**. C'est tout ce dont nous aurons besoin (on n'affirme pas que $\Omega'$ est simplement connexe, ce qui serait faux en général pour une réunion finie de disques).
* *Les pôles hors de $\Omega'$ ne contribuent pas.* Soit $z\notin\Omega'$. La fonction $w\mapsto\frac1{w-z}$ est holomorphe sur $\Omega'$ ; par invariance par homotopie ([[ch02-invariance-homotopie-integrale]], appliquée dans $\Omega'$ entre $\gamma$ et un lacet constant $c$, sur lequel toute intégrale est nulle puisque $c'=0$) :
$$
\Ind_z(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dw}{w-z}=\frac1{2i\pi}\int_c\frac{dw}{w-z}=0 .
$$
(C'est l'argument du Corollaire II.2.2, [[ch02-cauchy-simplement-connexe]], mené dans $\Omega'$.)
* *Il n'y a qu'un nombre fini de pôles dans $\Omega'$.* L'adhérence de $\Omega'$ est contenue dans le compact $\bigcup_{i=1}^m\bar D_{z_i}\subset\Omega$, et une partie localement finie de $\Omega$ ne rencontre un compact de $\Omega$ qu'en un nombre fini de points ([[ch02-discret-accumulation-localement-fini-def]]).

Notons $S:=\mathcal P(f,\Omega)\cap\Omega'$ cet ensemble **fini**. D'après ce qui précède, $\sum_{s\in\mathcal P(f,\Omega)}\mathrm{res}_s(f)\Ind_s(\gamma)=\sum_{s\in S}\mathrm{res}_s(f)\Ind_s(\gamma)$ (somme finie). Il suffit donc de démontrer
$$
\frac1{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in S}\mathrm{res}_s(f)\,\Ind_s(\gamma)\qquad(\star)
$$
pour $f$ méromorphe sur $\Omega'$, n'ayant que les pôles $S$ (en nombre fini) dans $\Omega'$, et $\gamma$ homotope à un lacet constant dans $\Omega'$.

**Étape 2 : on retranche les parties polaires.** Pour $s\in S$, écrivons le développement de Laurent de $f$ en $s$ ([[ch02-laurent-developpement]]) :
$$
f(z)=\sum_{n\ge-N_s}a^{(s)}_n(z-s)^n=Q_s(z)+\sum_{n\ge0}a^{(s)}_n(z-s)^n,\qquad Q_s(z):=\sum_{n=-N_s}^{-1}a^{(s)}_n(z-s)^n,
$$
pour $z$ proche de $s$, où les coefficients $a^{(s)}_n$ et la **partie polaire** $Q_s$ dépendent du point $s$. Chaque $Q_s$ est holomorphe sur $\C\setminus\{s\}$. La fonction
$$
g:=f-\sum_{s\in S}Q_s
$$
est holomorphe sur $\Omega'\setminus S$, et se prolonge holomorphiquement en chaque $s_0\in S$ : près de $s_0$, $f-Q_{s_0}=\sum_{n\ge0}a^{(s_0)}_n(z-s_0)^n$ est une série entière et les $Q_s$, $s\neq s_0$, sont holomorphes en $s_0$. Donc $g\in\Hol(\Omega')$. Comme $\gamma$ est homotope à un lacet constant $c$ dans $\Omega'$, l'invariance par homotopie ([[ch02-invariance-homotopie-integrale]]) donne
$$
\int_\gamma\Big(f(z)-\sum_{s\in S}Q_s(z)\Big)dz=\int_cg(z)\,dz=0 .
$$
(Si $\Omega$ est simplement connexe et a déjà un nombre fini de pôles, c'est directement le Corollaire II.2.2, [[ch02-cauchy-simplement-connexe]], comme l'écrit le poly.)

**Étape 3 : intégrale des parties polaires.** Soit $s\in S$ ; $s\notin\Gamma$. Pour $n\le-2$, la fonction $z\mapsto(z-s)^n$ a pour primitive holomorphe $z\mapsto\frac{(z-s)^{n+1}}{n+1}$ sur $\C\setminus\{s\}$, voisinage de $\Gamma$ ; son intégrale sur le lacet $\gamma$ est donc nulle ([[ch01-integrale-primitive]], Théorème I.5.9). Il reste le terme $n=-1$ :
$$
\frac1{2i\pi}\int_\gamma Q_s(z)\,dz=a^{(s)}_{-1}\,\frac1{2i\pi}\int_\gamma\frac{dz}{z-s}=\mathrm{res}_s(f)\,\Ind_s(\gamma),
$$
par la définition du résidu ([[ch02-residu-def]]) et de l'indice ([[ch02-indice-def]]).

**Conclusion.** Par linéarité de l'intégrale, les étapes 2 et 3 donnent
$$
\frac1{2i\pi}\int_\gamma f(z)\,dz=\sum_{s\in S}\frac1{2i\pi}\int_\gamma Q_s(z)\,dz=\sum_{s\in S}\mathrm{res}_s(f)\,\Ind_s(\gamma),
$$
c'est-à-dire $(\star)$, et donc la formule des résidus. $\square$

*Remarque (poly).* Si l'on ne veut utiliser que ce qui est complètement démontré, on peut n'appliquer le théorème qu'à des fonctions n'ayant qu'un nombre fini de pôles dans $\Omega$ : l'étape 1 est alors inutile.

## Preuve à trous

On prolonge $f$ à ses fausses singularités. Soit $\tilde\gamma$ une homotopie de $\gamma$ à un lacet constant dans $\Omega$, d'image compacte $K$. <trou indice="recouvrir un compact par des disques d'adhérence dans Ω">On recouvre $K$ par un nombre fini de disques $D_{z_i}$ avec $\bar D_{z_i}\subset\Omega$ et l'on pose $\Omega'=\bigcup_iD_{z_i}$ : $\gamma$ est homotope à un lacet constant dans $\Omega'$, et $\bar\Omega'$ est un compact de $\Omega$ qui ne contient qu'un nombre fini de pôles $S$</trou>. Pour $z\notin\Omega'$, <trou indice="appliquer l'invariance par homotopie à w ↦ 1/(w−z) dans Ω'">$w\mapsto\frac1{w-z}$ est holomorphe sur $\Omega'$, donc $\Ind_z(\gamma)=0$ par invariance par homotopie</trou> : les pôles hors de $\Omega'$ ne contribuent pas.

Pour $s\in S$, soit $Q_s(z)=\sum_{n=-N_s}^{-1}a^{(s)}_n(z-s)^n$ la partie polaire de $f$ en $s$. Alors <trou indice="que reste-t-il quand on enlève à f toutes ses parties polaires ?">$f-\sum_{s\in S}Q_s$ se prolonge en une fonction holomorphe sur $\Omega'$, donc son intégrale sur $\gamma$ est nulle (invariance par homotopie dans $\Omega'$)</trou>. Enfin, <trou indice="quels termes de Q_s ont une primitive sur C∖{s} ?">pour $n\le-2$, $(z-s)^n$ a la primitive $\frac{(z-s)^{n+1}}{n+1}$ sur $\C\setminus\{s\}$, d'intégrale nulle sur le lacet ; il reste $\frac1{2i\pi}\int_\gamma Q_s=a^{(s)}_{-1}\Ind_s(\gamma)=\mathrm{res}_s(f)\Ind_s(\gamma)$</trou>. En sommant sur $s\in S$, on obtient la formule. $\square$

## Exemples

* **Formule de Cauchy générale.** Soient $\Omega$ simplement connexe, $f\in\Hol(\Omega)$, $\gamma$ un lacet de $\Omega$ et $z\in\Omega\setminus\Gamma$. La fonction $F(w)=\frac{f(w)}{w-z}$ est méromorphe sur $\Omega$, avec au plus un pôle (simple) en $z$, de résidu $f(z)$ ([[ch02-residu-pole-simple]]) ; si $f(z)=0$, $z$ est une fausse singularité et les deux membres ci-dessous valent $0$. La formule des résidus donne
$$
\frac1{2i\pi}\int_\gamma\frac{f(w)}{w-z}\,dw=f(z)\,\Ind_z(\gamma).
$$
* **Un lacet qui tourne deux fois.** $\Omega=\C$, $f(z)=\dfrac1{z(z-3)}$, $\gamma(t)=2e^{4i\pi t}$, $t\in[0,1]$ (le cercle $C(0,2)$ parcouru deux fois). Pôles simples $0$ et $3$ ; $\Ind_0(\gamma)=2$ et $\Ind_3(\gamma)=0$ ($\gamma$ est la concaténation de deux copies de $C(0,2)$, et [[ch02-indice-cercle]]). $\mathrm{res}_0(f)=\lim_{z\to0}\frac1{z-3}=-\frac13$. Donc $\int_\gamma f(z)\,dz=2i\pi\cdot2\cdot\big(-\frac13\big)=-\dfrac{4i\pi}3$. (Vérification : par la formule de Cauchy, $\int_{C(0,2)}\frac{1/(z-3)}{z}\,dz=2i\pi\cdot\frac1{0-3}$, et l'on double.)
* **Une intégrale trigonométrique.** $I=\displaystyle\int_0^{2\pi}\frac{d\theta}{2+\cos\theta}$. Avec $z=e^{i\theta}$ ($\gamma=C(0,1)$), $\cos\theta=\frac12\big(z+\frac1z\big)$ et $d\theta=\frac{dz}{iz}$, d'où
$$
I=\int_{C(0,1)}\frac{2\,dz}{i\,(z^2+4z+1)} .
$$
Les racines de $z^2+4z+1$ sont $-2\pm\sqrt3$ ; seule $z_1=-2+\sqrt3\approx-0{,}27$ est dans $D(0,1)$ (indice $1$), l'autre ($\approx-3{,}73$) est à l'extérieur (indice $0$). Pôle simple, $\mathrm{res}_{z_1}=\frac{2/i}{2z_1+4}=\frac{2/i}{2\sqrt3}=\frac1{i\sqrt3}$ ([[ch02-residu-pole-simple]]). Donc $I=2i\pi\cdot\frac1{i\sqrt3}=\dfrac{2\pi}{\sqrt3}$.

## Pièges

* > ⚠️ Ne compter que les pôles **avec leur indice** : un pôle extérieur au lacet (indice $0$) ne compte pas, un pôle entouré deux fois compte double, un lacet parcouru dans le sens horaire donne un signe $-$. Pour un lacet simple orienté dans le sens direct, l'indice vaut $1$ à l'intérieur ([[ch02-formule-residus-pratique]]).
* > ⚠️ L'hypothèse porte sur $\Omega$ (ou sur l'homotopie de $\gamma$ dans $\Omega$), **pas** seulement sur $f$ : sur $\C^\times$, $\frac1z$ n'a « pas de pôle » mais $\int_{C(0,1)}\frac{dz}z=2i\pi$. Choisir $\Omega$ simplement connexe contenant le lacet (souvent $\C$, un disque, un demi-plan), et y lister **tous** les pôles.
* Le facteur est $2i\pi$ : $\int_\gamma f=2i\pi\sum_s\mathrm{res}_s(f)\Ind_s(\gamma)$.
* Le lacet ne doit passer par **aucun pôle** ; en pratique, si un pôle est sur le contour (par exemple sur l'axe réel), il faut le contourner par un petit demi-cercle.
* Une singularité essentielle ($e^{1/z}$) n'est pas un pôle : la formule du poly ne s'applique pas telle quelle (voir H2).
* Pour calculer une intégrale réelle, la formule ne fait que la moitié du travail : il faut encore justifier les passages à la limite sur les morceaux de contour (lemme de Jordan, majoration $|\int_\gamma f|\le L(\gamma)\sup_\gamma|f|$, [[ch01-longueur-majoration-integrale]]).
