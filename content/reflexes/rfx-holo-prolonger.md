---
id: rfx-holo-prolonger
type: reflexe
situation: Prolonger une fonction holomorphe au-delà de son domaine (ou montrer que c'est impossible)
chapters: [1, 2, 3]
---
## Situation

On a $f$ holomorphe sur un ouvert $\Omega$ « troué » ou « coupé » : $\Omega=D(z_0,r)\setminus\{z_0\}$, $\C\setminus$ un ensemble discret, un demi-disque $D^+$ avec une information sur le segment réel, un disque $D(0,R)$ où $f$ est donnée par une série entière, une bande ou un demi-plan où $f$ est donnée par une intégrale. On veut (a) montrer que $f$ **se prolonge** en une fonction holomorphe (ou méromorphe) sur un ouvert plus grand $\tilde\Omega$, ou (b) montrer qu'**aucun** prolongement holomorphe n'existe au voisinage de certains points (pôle, singularité essentielle, point singulier sur le cercle de convergence).

Mots-clés : *se prolonge en une fonction holomorphe*, *singularité éliminable/effaçable*, *bornée au voisinage de*, *continue sur $\bar D^+$ et réelle sur le segment*, *prolongement méromorphe*, *équation fonctionnelle*, *$|f(z)|\to+\infty$*.

## Options

### [x] Théorème de Riemann (singularité effaçable) — [[ch02-singularite-effacable-riemann]]
**Quand.** $f\in\Hol(\Omega\setminus\{z_0\})$ et $f$ **bornée** au voisinage de $z_0$ (par exemple $f$ a une limite finie en $z_0$, ou $|f|\le M$ sur $D(z_0,\eps)^\times$). Plus généralement $f$ holomorphe hors d'un ensemble $P$ localement fini et bornée près de chaque point de $P$.
**Justification.** $f$ est alors méromorphe avec un développement de Laurent sans partie polaire ([[ch02-laurent-developpement]]) : le prolongement est la somme de la série entière.
**Pièges.** Le prolongement est **unique** et obtenu par $f(z_0)=\lim_{z\to z_0}f(z)$ : il faut souvent **calculer** cette limite (DL). Si $|f|\to+\infty$ en $z_0$, c'est un pôle : prolongement **méromorphe** seulement ([[ch02-classification-singularites]], question 6). Si $|f|$ n'est ni bornée ni $\to\infty$ : singularité essentielle, aucun prolongement, image dense (Casorati–Weierstraß).

### [x] Principe de réflexion de Schwarz — [[ch02-schwarz-reflexion]]
**Quand.** $f$ est holomorphe sur une moitié $\Omega^+=\Omega\cap\{\Im z>0\}$ d'un ouvert $\Omega$ **symétrique** par rapport à $\R$, continue sur $\Omega^+\cup(\Omega\cap\R)$ et **réelle** sur $\Omega\cap\R$. On pose $F(z)=f(z)$ en haut, $\overline{f(\bar z)}$ en bas. Variantes par changement de variable : symétrie par rapport à une droite ou à un cercle ($|f|=1$ sur un arc du cercle unité : réfléchir par $z\mapsto1/\bar z$).
**Justification.** $\overline{f(\bar z)}$ est holomorphe dans le bas (Cauchy réelles) ; $F$ est continue grâce à la réalité sur $\R$ ; Morera [[ch01-morera]] sur les triangles qui traversent $\R$ conclut.
**Pièges.** Sans l'hypothèse « réelle sur le segment », $F$ n'est pas continue et rien ne marche ; c'est la première chose à vérifier et à écrire. La continuité **jusqu'au bord** réel est une hypothèse, pas une conséquence.

### [x] Prolongement analytique par une autre représentation — [[ch01-prolongement-analytique]]
**Quand.** On dispose d'une **deuxième formule** pour $f$ (intégrale, série, produit, équation fonctionnelle du type $f(z+1)=zf(z)$ ou $f(z)=\varphi(z)f(z+1)$) valable sur un ouvert plus grand ou permettant de « décaler » le domaine bande par bande. Exemple du poly : $\Gamma(z)=\Gamma(z+1)/z$ prolonge $\Gamma$ de $\{\Re z>0\}$ à $\{\Re z>-1\}\setminus\{0\}$, puis à $\C\setminus(-\N)$ ([[ch03-gamma-definition-prolongement]]).
**Justification.** Deux fonctions holomorphes sur un connexe qui coïncident sur un ouvert non vide coïncident partout : le recollement est bien défini et unique.
**Pièges.** Vérifier la **connexité** de l'ouvert de recollement et que les deux expressions coïncident sur une partie ayant un point d'accumulation **dans** cet ouvert. Un prolongement par équation fonctionnelle crée en général des **pôles** (zéros du facteur $\varphi$) : les localiser et donner leur ordre.

### [x] Rayon de convergence et estimées de Cauchy (pour l'impossibilité) — [[ch01-estimees-cauchy]]
**Quand.** $f$ est une série entière $\sum a_n(z-z_0)^n$ de rayon $R<\infty$ et on demande si $f$ se prolonge au-delà du cercle $C(z_0,R)$ ; ou on veut montrer qu'un point $z_1$ est **singulier** (aucun prolongement holomorphe à un voisinage de $z_1$).
**Justification.** Si $f$ se prolongeait en $\tilde f\in\Hol(D(z_0,R'))$ avec $R'>R$, le rayon de la série de Taylor de $\tilde f$ en $z_0$ serait $\ge R'$ ([[ch01-estimees-cauchy]], rayon $\ge\rho(z_0)$), or cette série est $\sum a_n(z-z_0)^n$ de rayon $R$ : contradiction. Donc **au moins un point** du cercle est singulier. Pour montrer qu'un point précis $z_1$ est singulier : $|f(z)|\to\infty$ ou $f$ non bornée le long d'un rayon aboutissant à $z_1$.
**Pièges.** « Rayon $R$ » ne signifie pas « singulier **partout** sur le cercle » : $\sum z^n$ a rayon $1$ et se prolonge en $1/(1-z)$ sur $\C\setminus\{1\}$ ([[ch01-exemple-prolongement-serie-geometrique]]). Inversement, $f$ peut être **continue** sur le disque fermé et pourtant ne pas se prolonger ($\sum z^n/n^2$ a une singularité en $1$ : la dérivée $\sum z^{n-1}/n$ y diverge).

### [ ] Théorème de Weierstraß — [[ch03-weierstrass]]
**Pourquoi ce n'est pas l'outil ici.** Une suite d'approximations $f_n\to f$ converge là où elle converge ; passer à la limite ne crée pas de valeurs de $f$ en dehors du domaine de convergence. La série de Taylor d'une fonction ne la prolonge jamais au-delà de son disque de convergence.
**Quand il le serait.** Pour montrer que le prolongement construit par une **nouvelle** série ou un produit infini (convergeant sur un ouvert plus grand) est holomorphe ; c'est l'étape « la nouvelle formule définit bien une fonction holomorphe » de l'option 3.

### [ ] Théorème de Morera — [[ch01-morera]]
**Pourquoi ce n'est pas l'outil ici.** Morera suppose $f$ **déjà définie et continue sur tout l'ouvert** cible ; quand $f$ n'est connue que d'un côté d'un segment ou hors d'un point, il n'y a rien à quoi l'appliquer tant qu'on n'a pas construit le candidat prolongement.
**Quand il le serait.** C'est le moteur de la réflexion de Schwarz une fois $F$ construite et continue, et de l'énoncé « continue sur $D$, holomorphe sur $D\setminus\,]-1,1[$ $\Rightarrow$ holomorphe sur $D$ » (question 1 de [[ch02-schwarz-reflexion]]).

## Démarche

1. **Quel est l'obstacle ?** Un point isolé (ou un ensemble discret) : aller en 2. Un segment ou une droite avec continuité : aller en 3. Le bord du domaine de validité d'une formule (cercle de convergence, bord d'une bande) : aller en 4.
2. **Point isolé $z_0$.** Étudier $|f|$ près de $z_0$. Bornée (calculer la limite par DL) : Riemann, prolongement holomorphe. $|f|\to+\infty$ : pôle, prolongement méromorphe seulement, ordre = plus petit $m$ tel que $(z-z_0)^mf$ soit bornée. Ni l'un ni l'autre (par exemple $e^{1/z}$) : singularité essentielle, pas de prolongement. Si l'énoncé dit « $f$ évite un disque près de $z_0$ » : appliquer Riemann à $1/(f-a)$ ([[ch02-classification-singularites]], question 7).
3. **Segment réel.** Vérifier : continuité jusqu'au segment, réalité sur le segment (ou module $1$, ou valeurs dans une droite : s'y ramener par une similitude ou une inversion). Construire $F$ par réflexion, vérifier la continuité de $F$ au raccord, conclure par réflexion de Schwarz. Le prolongement obtenu vérifie $F(\bar z)=\overline{F(z)}$.
4. **Bord d'un domaine de formule.** Chercher une **autre représentation** : équation fonctionnelle (décalage), intégration par parties qui améliore la convergence d'une intégrale, formule des résidus, développement en série sur un ouvert plus grand, formule de Cauchy sur un contour déformé. Pour montrer l'**impossibilité** : un point du cercle de convergence est toujours singulier (option 4) ; pour un point précis, exhiber $|f|\to\infty$ ou une dérivée qui explose le long d'un rayon ; si tous les points du cercle sont singuliers (séries lacunaires), c'est un énoncé guidé.
5. **Toujours** : nommer l'ouvert $\tilde\Omega$ du prolongement, vérifier sa **connexité** si on invoque l'unicité, et préciser **holomorphe** ou **méromorphe**.

## Pièges

* Oublier de calculer la valeur au point prolongé : le correcteur attend « $f(0)=\lim_{z\to0}f(z)=\dots$ » avec le DL qui le justifie.
* Croire que « continue au point » suffit à la définition et oublier de citer Riemann (la continuité donne la bornitude, Riemann donne l'holomorphie).
* Appliquer la réflexion de Schwarz à une fonction qui n'est **pas réelle** sur le segment, ou en oubliant que l'ouvert doit être **symétrique**.
* Identifier « rayon de convergence fini » et « frontière naturelle » : seule l'existence d'**un** point singulier sur le cercle est automatique.
* Prolonger par équation fonctionnelle sans traiter les points où le facteur s'annule : ce sont des pôles (ou des singularités effaçables si le numérateur s'annule aussi — à vérifier).
* Confondre prolongement **continu** et prolongement **holomorphe** : $z\mapsto\bar z$ est continue mais ne prolonge holomorphiquement rien.

## Mini-exemple

*Énoncé.* $g(z)=\dfrac1{e^z-1}-\dfrac1z$ sur $\Omega=\C\setminus2i\pi\Z$. En quels points de $2i\pi\Z$ la fonction $g$ se prolonge-t-elle holomorphiquement ?

*Solution.* **En $0$.** Pour $0<|z|<2\pi$, $e^z-1=z\bigl(1+\tfrac z2+\tfrac{z^2}6+O(z^3)\bigr)$, donc avec $u=\tfrac z2+\tfrac{z^2}6+O(z^3)$ : $\dfrac1{e^z-1}=\dfrac1z(1-u+u^2+O(z^3))=\dfrac1z\Bigl(1-\tfrac z2+\bigl(\tfrac14-\tfrac16\bigr)z^2+O(z^3)\Bigr)$, d'où $g(z)=-\tfrac12+\tfrac z{12}+O(z^2)$. Ainsi $g$ est bornée près de $0$ : par le théorème de Riemann [[ch02-singularite-effacable-riemann]], $g$ se prolonge holomorphiquement en $0$ avec $g(0)=-\tfrac12$.
**En $z_k=2i\pi k$, $k\ne0$.** $e^z-1$ s'annule en $z_k$ avec $(e^z-1)'=e^{z_k}=1\ne0$ : zéro simple, donc $|1/(e^z-1)|\to+\infty$ quand $z\to z_k$, tandis que $1/z$ reste borné ($z_k\ne0$). Donc $|g(z)|\to+\infty$ : $z_k$ est un pôle (simple), et $g$ ne se prolonge pas holomorphiquement en $z_k$ (sinon $g$ serait bornée près de $z_k$). Conclusion : $g$ se prolonge en une fonction holomorphe sur $\C\setminus2i\pi\Z^*$, méromorphe sur $\C$.
