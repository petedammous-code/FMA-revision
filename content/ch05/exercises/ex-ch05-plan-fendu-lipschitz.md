---
id: ex-ch05-plan-fendu-lipschitz
type: exercise
chapters: [5, 1]
title: Différentielle bornée sans être lipschitzienne — l'argument sur le plan fendu
source: Inventé
difficulty: 3
time: 45
tools: [ch05-accroissements-finis-vectoriel, ch05-primitive-integrale, ch05-accroissements-finis, ch05-composition-differentielles, ch05-norme-operateur-def, ch05-differentielle-nulle-constante, ch01-c-derivable-ssi-df-c-lineaire, ch01-exp-trigo-hyperboliques, ch01-longueur-majoration-integrale]
---
## Énoncé

*Partie générale.* Soient $E,F$ deux espaces vectoriels normés, $U$ un ouvert de $E$ et $f:U\to F$ une application différentiable sur $U$ telle que $\norm{df_x}_{\mathcal L(E;F)}\le k$ pour tout $x\in U$ ($k\ge0$ fixé). Pour un chemin $\gamma:[0,1]\to U$ de classe $C^1$, on note $L(\gamma)=\int_0^1\norm{\gamma'(t)}_E\,dt$ sa longueur.

1. Montrer que $\norm{f(\gamma(1))-f(\gamma(0))}_F\le k\,L(\gamma)$ pour tout chemin $\gamma:[0,1]\to U$ de classe $C^1$.

*L'argument principal.* On identifie $\C$ à $\R^2$ ($z=x+iy$), muni du module $|\cdot|$. Soit $U=\C\setminus\,]-\infty,0]$ (le plan privé de la demi-droite réelle négative, $0$ compris), et, pour $z=x+iy\in U$,
$$
\theta(z)=2\arctan\Big(\frac{y}{x+\sqrt{x^2+y^2}}\Big).
$$

2. Montrer que $\theta$ est bien définie et de classe $C^1$ sur $U$, que $\theta(z)\in\,]-\pi,\pi[$ est un argument de $z$, et que $\Lambda(z)=\ln|z|+i\theta(z)$ vérifie $e^{\Lambda(z)}=z$ sur $U$.
3. En différentiant l'identité $\exp\circ\Lambda=\mathrm{id}_U$, calculer $d\Lambda_z$, puis $d\theta_z$, et montrer que $\norm{d\theta_z}=\dfrac1{|z|}$. Que peut-on dire de $\Lambda$ ?
4. Soit $V=\{z\in U : |z|>1\}$. Montrer que $\norm{d\theta_z}\le1$ pour tout $z\in V$ et que $\theta$ est $1$-lipschitzienne sur tout disque ouvert contenu dans $V$, mais que $\theta$ n'est pas lipschitzienne sur $V$ (on pourra comparer $\theta(-2+i\eps)$ et $\theta(-2-i\eps)$). Quelle hypothèse du théorème des accroissements finis fait défaut ?
5. Montrer que tout chemin $C^1$ contenu dans $V$ et reliant $-2-i\eps$ à $-2+i\eps$ ($0<\eps<1$) a une longueur au moins égale à $2\theta(-2+i\eps)$. Que vaut la limite de ce minorant quand $\eps\to0^+$ ? Interpréter.
6. Montrer qu'il n'existe aucune fonction $\tilde\theta:\C\setminus\{0\}\to\R$ de classe $C^1$ telle que $d\tilde\theta_z=d\theta_z$ pour tout $z\in U$.

## Indices

### Indice 1
Pour 1, se ramener à une fonction d'une variable réelle, $t\mapsto f(\gamma(t))$, et la comparer à $t\mapsto k\int_0^t\norm{\gamma'(s)}\,ds$ : il existe une version des accroissements finis qui compare deux fonctions.

### Indice 2
Théorème V.4.1 avec $g(t)=k\int_0^t\norm{\gamma'(s)}ds$, dérivable de dérivée $k\norm{\gamma'(t)}$ (dérivée d'une intégrale de fonction continue). Pour 2, montrer d'abord que $x+\sqrt{x^2+y^2}>0$ sur $U$ ; écrire $z=\rho e^{i\alpha}$ avec $\alpha\in\,]-\pi,\pi[$ et reconnaître $\tan(\alpha/2)$.

### Indice 3
Pour 3, $\exp$ est holomorphe : sa différentielle réelle en $u$ est la multiplication par $e^u$. Règle de la chaîne : $e^{\Lambda(z)}\,d\Lambda_z(w)=w$. Puis $\theta=\Im\circ\Lambda$ avec $\Im$ linéaire.

### Indice 4
Pour 4 et 5, $\theta(\bar z)=-\theta(z)$ et $\theta(-2+i\eps)\to\pi$. Pour 6, $\tilde\theta-\theta$ aurait une différentielle nulle sur l'ouvert $U$ : est-il connexe ?

## Corrigé

**1.** Posons $\phi=f\circ\gamma:[0,1]\to F$. Elle est continue sur $[0,1]$ (composée d'applications continues ; $f$ est continue car différentiable, Remarque V.3.2) et, pour $t\in\,]0,1[$, la règle de la chaîne ([[ch05-composition-differentielles]] ; $\gamma$ dérivable en $t$, $f$ différentiable en $\gamma(t)\in U$) donne $\phi'(t)=df_{\gamma(t)}(\gamma'(t))$, d'où
$$
\norm{\phi'(t)}_F\le\norm{df_{\gamma(t)}}\,\norm{\gamma'(t)}_E\le k\norm{\gamma'(t)}_E
$$
(définition de la norme d'opérateur, [[ch05-norme-operateur-def]]). Soit $g(t)=k\int_0^t\norm{\gamma'(s)}_E\,ds$. La fonction $s\mapsto\norm{\gamma'(s)}_E$ est continue sur $[0,1]$ à valeurs dans le Banach $\R$, donc par le Théorème V.4.6 ([[ch05-primitive-integrale]]), $g$ est continue sur $[0,1]$, dérivable sur $]0,1[$ et $g'(t)=k\norm{\gamma'(t)}_E\ge\norm{\phi'(t)}_F$. Le Théorème V.4.1 ([[ch05-accroissements-finis-vectoriel]] ; hypothèses : $\phi,g$ continues sur $[0,1]$, dérivables sur $]0,1[$, $\norm{\phi'}\le g'$) donne
$$
\norm{f(\gamma(1))-f(\gamma(0))}_F=\norm{\phi(1)-\phi(0)}_F\le g(1)-g(0)=k\,L(\gamma).
$$
(Pour le segment $\gamma(t)=(1-t)a+tb$, $L(\gamma)=\norm{b-a}$ et l'on retrouve le théorème des accroissements finis, [[ch05-accroissements-finis]].)

**2.** *Le dénominateur.* Soit $\rho=|z|=\sqrt{x^2+y^2}$. On a $\rho\ge|x|\ge-x$, donc $x+\rho\ge0$, avec égalité si et seulement si $\rho=|x|$ et $|x|=-x$, c'est-à-dire $y=0$ et $x\le0$, soit $z\in\,]-\infty,0]$. Sur $U$, $x+\rho>0$ : $\theta$ est bien définie. Sur $U$ (qui ne contient pas $0$), $(x,y)\mapsto\sqrt{x^2+y^2}$ est $C^\infty$ (racine d'une fonction polynomiale à valeurs dans $]0,+\infty[$), puis quotient par une fonction qui ne s'annule pas et composition par $\arctan$ : $\theta$ est $C^\infty$, a fortiori $C^1$.

*C'est un argument.* Écrivons $z=\rho e^{i\alpha}$ avec $\alpha\in\,]-\pi,\pi]$ ; comme $z\notin\,]-\infty,0]$, $\alpha\ne\pi$. Alors $1+\cos\alpha>0$ et
$$
\frac{y}{x+\rho}=\frac{\sin\alpha}{1+\cos\alpha}=\frac{2\sin\frac\alpha2\cos\frac\alpha2}{2\cos^2\frac\alpha2}=\tan\frac\alpha2,
$$
avec $\frac\alpha2\in\,]-\frac\pi2,\frac\pi2[$, donc $\arctan(\tan\frac\alpha2)=\frac\alpha2$ et $\theta(z)=\alpha\in\,]-\pi,\pi[$. Enfin $e^{\Lambda(z)}=e^{\ln\rho}e^{i\theta(z)}=\rho e^{i\alpha}=z$.

**3.** *Différentielle de $\Lambda$.* $\Lambda=\ln|\cdot|+i\theta$ est de classe $C^1$ sur l'ouvert $U$ de $\R^2$ (au sens réel). L'exponentielle est holomorphe sur $\C$, de dérivée $e^u$ ([[ch01-exp-trigo-hyperboliques]]) ; d'après la Proposition I.2.3 ([[ch01-c-derivable-ssi-df-c-lineaire]]), sa différentielle réelle en $u$ est $d\exp_u(v)=e^u v$. La règle de la chaîne appliquée à $\exp\circ\Lambda=\mathrm{id}_U$ (dont la différentielle est l'identité) donne, pour tout $w\in\C$,
$$
w=d\exp_{\Lambda(z)}\big(d\Lambda_z(w)\big)=e^{\Lambda(z)}\,d\Lambda_z(w)=z\,d\Lambda_z(w),\qquad\text{donc}\qquad d\Lambda_z(w)=\frac wz .
$$
Ainsi $d\Lambda_z$ est $\C$-linéaire (multiplication par $1/z$) : par la même Proposition I.2.3, $\Lambda$ est $\C$-dérivable en tout point, donc **holomorphe sur $U$**, de dérivée $\Lambda'(z)=1/z$ — c'est la détermination principale du logarithme.

*Différentielle de $\theta$.* $\theta=\Im\circ\Lambda$ et $\Im:\C\to\R$ est $\R$-linéaire continue, donc $d\theta_z(w)=\Im\big(\frac wz\big)$. En coordonnées : $d\theta_z(1)=\Im\frac{\bar z}{|z|^2}=\frac{-y}{x^2+y^2}$ et $d\theta_z(i)=\Im\frac{i\bar z}{|z|^2}=\frac{x}{x^2+y^2}$, soit $\nabla\theta(x,y)=\frac{(-y,x)}{x^2+y^2}$ (on peut le vérifier en dérivant directement la formule de $\theta$).

*Norme.* Pour tout $w$, $|d\theta_z(w)|\le\big|\frac wz\big|=\frac{|w|}{|z|}$, avec égalité pour $w=iz$ ($\Im(i)=1$). Donc $\norm{d\theta_z}=\sup_{|w|=1}|d\theta_z(w)|=\frac1{|z|}$.

**4.** *Borne.* $V$ est ouvert (intersection de $U$ et de l'ouvert $\{|z|>1\}$) et pour $z\in V$, $\norm{d\theta_z}=1/|z|<1$.

*Lipschitz sur les disques.* Si $D(z_0,\delta)\subset V$, ce disque est **convexe** et $\norm{d\theta}\le1$ dessus : le théorème des accroissements finis ([[ch05-accroissements-finis]]) donne $|\theta(z)-\theta(z')|\le|z-z'|$ pour $z,z'\in D(z_0,\delta)$. Tout point de l'ouvert $V$ ayant un tel disque autour de lui, $\theta$ est localement $1$-lipschitzienne sur $V$.

*Pas lipschitzienne sur $V$.* Pour $0<\eps<1$, $z_\eps=-2+i\eps$ et $\bar z_\eps=-2-i\eps$ sont dans $V$ ($|z_\eps|>2$, $\Im z_\eps\ne0$). La formule de $\theta$ est impaire en $y$ : $\theta(\bar z_\eps)=-\theta(z_\eps)$. Et
$$
\frac{\eps}{-2+\sqrt{4+\eps^2}}=\frac{\eps\,(2+\sqrt{4+\eps^2})}{\eps^2}=\frac{2+\sqrt{4+\eps^2}}{\eps}\xrightarrow[\eps\to0^+]{}+\infty,
$$
donc $\theta(z_\eps)\to2\cdot\frac\pi2=\pi$. Ainsi $|\theta(z_\eps)-\theta(\bar z_\eps)|=2\theta(z_\eps)\to2\pi$ alors que $|z_\eps-\bar z_\eps|=2\eps\to0$ : aucune constante $C$ ne vérifie $|\theta(z)-\theta(z')|\le C|z-z'|$ sur $V$ (et $\theta$ n'est même pas uniformément continue sur $V$).

*Hypothèse manquante.* Le théorème des accroissements finis demande que le **segment** $[z,z']$ soit contenu dans l'ouvert (ou que l'ouvert soit convexe). Ici $V$ n'est pas convexe : le segment $[\bar z_\eps,z_\eps]$ contient $-2\notin V$.

**5.** Soit $\gamma:[0,1]\to V$ de classe $C^1$ avec $\gamma(0)=\bar z_\eps$, $\gamma(1)=z_\eps$. La question 1, appliquée à $f=\theta$ sur l'ouvert $V$ avec $k=1$ (question 4), donne
$$
L(\gamma)\ge|\theta(z_\eps)-\theta(\bar z_\eps)|=2\theta(z_\eps)\xrightarrow[\eps\to0^+]{}2\pi .
$$
*Interprétation.* Les deux points sont à distance $2\eps$, mais tout chemin qui les relie dans $V$ (sans traverser la coupure ni entrer dans le disque unité fermé) doit « faire le tour » du disque unité, ce qui coûte une longueur au moins voisine de $2\pi$, le périmètre du cercle unité. La longueur des chemins ($\approx$ la distance « intrinsèque » de $V$) est la bonne distance pour laquelle $\theta$ est $1$-lipschitzienne.

**6.** *$U$ est connexe.* Il est étoilé par rapport à $1$ : pour $z=x+iy\in U$ et $t\in[0,1]$, le point $(1-t)+tz$ a pour partie imaginaire $ty$ ; si $y\ne0$ il est hors de l'axe réel pour $t>0$ et vaut $1$ pour $t=0$ ; si $y=0$, alors $x>0$ et $(1-t)+tx>0$. Donc $[1,z]\subset U$, et $U$, étoilé, est connexe par arcs.

*Contradiction.* Supposons qu'une telle $\tilde\theta$ existe. Sur l'ouvert connexe $U$, $\tilde\theta-\theta$ est différentiable de différentielle nulle, donc constante, égale à $c$ ([[ch05-differentielle-nulle-constante]]). Pour $0<\eps<1$, $\tilde\theta(-1+i\eps)-\tilde\theta(-1-i\eps)=\theta(-1+i\eps)-\theta(-1-i\eps)=2\theta(-1+i\eps)$, qui tend vers $2\pi$ (même calcul qu'en 4 : $\frac{\eps}{-1+\sqrt{1+\eps^2}}=\frac{1+\sqrt{1+\eps^2}}{\eps}\to+\infty$). Mais $\tilde\theta$ est continue en $-1\in\C\setminus\{0\}$, donc le membre de gauche tend vers $\tilde\theta(-1)-\tilde\theta(-1)=0$. Contradiction : la forme linéaire $d\theta$ n'est la différentielle d'aucune fonction sur $\C\setminus\{0\}$ (comme $1/z$ n'a pas de primitive holomorphe sur $\C\setminus\{0\}$).

## Pièges et variantes

* Appliquer le théorème des accroissements finis sur un ouvert **non convexe** sans vérifier que le segment y est contenu : c'est exactement l'erreur que la question 4 met en évidence.
* Confondre « différentielle bornée » et « lipschitzienne » : la première donne seulement la seconde sur les convexes, et pour la distance « longueur des chemins » en général (question 1).
* Dans la question 1, utiliser le théorème des accroissements finis « à la $\R\to\R$ » (avec un point $c$ où l'égalité a lieu) : il est faux pour des fonctions à valeurs vectorielles ; seule l'**inégalité** du Théorème V.4.1 est disponible.
* Ne pas oublier, en 2, que $\arctan(\tan u)=u$ seulement pour $u\in\,]-\frac\pi2,\frac\pi2[$.
* Variante : la question 1 s'étend aux chemins $C^1$ **par morceaux** (relation de Chasles) ; on en déduit que sur un ouvert connexe, une application à différentielle bornée par $k$ est $k$-lipschitzienne pour la distance « borne inférieure des longueurs des chemins ».
* Variante : sur le demi-plan convexe $\{z : \Re z>1\}$, on a $\norm{d\theta_z}\le1$ et $\theta$ y est $1$-lipschitzienne (accroissements finis). Sur $V$, ce n'est pas la non-convexité seule qui tue le caractère lipschitzien, mais la **coupure** : deux points très proches, de part et d'autre de $]-\infty,-1[$, ne peuvent être reliés dans $V$ que par des chemins longs (question 5).
