---
id: ch02-indice-def
type: definition
chapter: 2
title: Indice d'un lacet en un point
ref: Définition II.3.1
page: 40
importance: 3
depends: [ch01-def-chemin-lacet, ch01-def-integrale-chemin, ch01-integrale-reparametrage-oppose-concatenation]
tags: [indice, lacet, nombre-de-tours, argument, residus]
---
## Intuition

> 💡 L'**indice** de $\gamma$ en $z_0$ compte, algébriquement, le **nombre de tours** que fait le lacet $\gamma$ autour du point $z_0$ : $+1$ par tour dans le sens trigonométrique, $-1$ par tour dans le sens des aiguilles d'une montre, $0$ si $z_0$ est « à l'extérieur ».

Pourquoi une intégrale ? Si l'on écrit $\gamma(t)-z_0=\rho(t)e^{i\theta(t)}$ (module et argument du vecteur qui va de $z_0$ au point courant), alors formellement $\dfrac{\gamma'(t)}{\gamma(t)-z_0}=\dfrac{\rho'(t)}{\rho(t)}+i\,\theta'(t)$ ; en intégrant de $0$ à $1$, la partie en $\rho$ donne $\ln\rho(1)-\ln\rho(0)=0$ (lacet), et la partie en $\theta$ donne $i\,(\theta(1)-\theta(0))$ : la variation totale de l'argument, qui est un multiple entier de $2\pi$. Diviser par $2i\pi$ donne le nombre de tours. L'intégrale $\int_\gamma\frac{dz}{z-z_0}$ est donc un « compteur de tours », et c'est elle qui fera apparaître les coefficients entiers dans la formule des résidus ([[ch02-formule-residus]]).

Rappels : un **lacet** est un chemin ($C^1$ par morceaux) $\gamma:[a,b]\to\C$ avec $\gamma(a)=\gamma(b)$, ici paramétré par $[0,1]$ ; $\gamma^{opp}(t)=\gamma(1-t)$ est le lacet opposé ([[ch01-def-chemin-lacet]]) ; l'intégrale le long d'un chemin est $\int_\gamma g(z)\,dz=\int_0^1 g(\gamma(t))\gamma'(t)\,dt$ ([[ch01-def-integrale-chemin]]).

## Énoncé

**Définition (poly, Définition II.3.1, p. 40).** Soit $\gamma:[0,1]\to\C$ un lacet dans $\C$ dont on note $\Gamma=\gamma([0,1])$ l'image, et soit $z_0\notin\Gamma$. L'**indice** de $\gamma$ en $z_0$ est défini par
$$
\Ind_{z_0}(\gamma):=\frac{1}{2i\pi}\int_\gamma\frac{dz}{z-z_0}=\frac{1}{2i\pi}\int_0^1\frac{\gamma'(t)}{\gamma(t)-z_0}\,dt .
$$
On vérifie que $\Ind_{z_0}(\gamma^{opp})=-\Ind_{z_0}(\gamma)$ (voir la Définition I.5.1, [[ch01-def-chemin-lacet]]).

*Vérification.* Par le changement de signe de l'intégrale sur le chemin opposé ([[ch01-integrale-reparametrage-oppose-concatenation]], point (ii)) appliqué à la fonction continue $z\mapsto\frac1{z-z_0}$ sur l'ouvert $\C\setminus\{z_0\}$ qui contient $\Gamma$ : $\int_{\gamma^{opp}}\frac{dz}{z-z_0}=-\int_\gamma\frac{dz}{z-z_0}$.

Les propriétés fondamentales (l'indice est un **entier**, constant sur chaque composante connexe de $\C\setminus\Gamma$, nul sur la composante non bornée) sont l'objet de [[ch02-indice-entier-localement-constant]] ; l'invariance par homotopie dans $\C\setminus\{z_0\}$ est [[ch02-indice-invariance-homotopie]].

## Hypothèses

### H1 — $z_0\notin\Gamma$ (le point n'est pas sur le lacet)

**Rôle.** L'intégrande $t\mapsto\frac{\gamma'(t)}{\gamma(t)-z_0}$ doit être définie et bornée : $\gamma-z_0$ est continue et ne s'annule pas sur le compact $[0,1]$, donc $|\gamma(t)-z_0|\ge m>0$, et $\gamma'$ est bornée (chemin $C^1$ par morceaux, [[ch01-chemin-c1-par-morceaux-derivee-bornee]]). L'intégrale existe donc.

**Si on la retire.** Pour $\gamma(t)=e^{2i\pi t}$ et $z_0=1\in\Gamma$, l'intégrande $\frac{2i\pi e^{2i\pi t}}{e^{2i\pi t}-1}$ n'est pas bornée au voisinage de $t=0$ et $t=1$ (elle se comporte comme $\frac{1}{t}$) : l'intégrale n'a pas de sens. L'indice n'est **pas défini** sur $\Gamma$.

### H2 — $\gamma$ est un lacet ($\gamma(0)=\gamma(1)$), $C^1$ par morceaux

**Rôle.** La régularité donne un sens à $\gamma'$ ; la fermeture est ce qui rend l'indice entier ([[ch02-indice-entier-localement-constant]]) : la preuve montre que $\exp\big(\int_0^1\frac{\gamma'}{\gamma-z_0}\big)=\frac{\gamma(1)-z_0}{\gamma(0)-z_0}$, qui vaut $1$ si et seulement si le chemin est fermé.

**Si on la retire.** Pour le chemin non fermé $\gamma(t)=e^{i\pi t}$ (demi-cercle supérieur de $1$ à $-1$) et $z_0=0$, $\frac1{2i\pi}\int_0^1\frac{i\pi e^{i\pi t}}{e^{i\pi t}}dt=\frac12\notin\Z$ : la formule garde un sens (c'est la variation de l'argument divisée par $2\pi$, un demi-tour) mais ce n'est plus un « nombre de tours ».

## Exemples

1. **Cercle parcouru $k$ fois.** Pour $k\in\Z$, $\gamma_k(t)=z_0+re^{2i\pi kt}$, $t\in[0,1]$ : $\gamma_k'(t)=2i\pi k\,re^{2i\pi kt}$, donc
$$
\Ind_{z_0}(\gamma_k)=\frac1{2i\pi}\int_0^1\frac{2i\pi k\,re^{2i\pi kt}}{re^{2i\pi kt}}\,dt=k .
$$
Pour $k=1$ (cercle $C(z_0,r)$ dans le sens direct) l'indice est $1$ ; pour $k=-1$ (sens horaire, c'est $\gamma_1^{opp}$) il vaut $-1$ ; pour $k=2$ (deux tours) il vaut $2$. Voir aussi [[ch02-indice-cercle]].

2. **Point extérieur au cercle.** Soit $z_1$ avec $|z_1-z_0|>r$ et $\gamma=C(z_0,r)$. La fonction $z\mapsto\frac1{z-z_1}$ est holomorphe sur le disque $D(z_0,|z_1-z_0|)$, qui contient $\Gamma=C(z_0,r)$ ; elle y admet donc une primitive ([[ch01-primitive-locale]]) et son intégrale sur le lacet $\gamma$ est nulle ([[ch01-integrale-primitive]]) : $\Ind_{z_1}(C(z_0,r))=0$. (Le poly obtient le même résultat par un développement en série géométrique, [[ch02-indice-cercle]].)

3. **Une ellipse.** $\gamma(t)=a\cos(2\pi t)+ib\sin(2\pi t)$ avec $a,b>0$, et $z_0=0$. Le calcul direct de $\int_0^1\frac{\gamma'}{\gamma}$ est pénible, mais $\gamma$ est homotope au cercle unité dans $\C\setminus\{0\}$ par $H(s,t)=((1-s)a+s)\cos(2\pi t)+i((1-s)b+s)\sin(2\pi t)$, qui ne s'annule jamais (les deux coefficients sont $>0$ et $\cos,\sin$ ne s'annulent pas simultanément) et vérifie $H(s,0)=H(s,1)$. Par [[ch02-indice-invariance-homotopie]], $\Ind_0(\gamma)=\Ind_0(C(0,1))=1$. Autre lecture : l'argument de $\gamma(t)$ croît exactement d'un tour, en accord avec l'intuition « variation de l'argument $/2\pi$ ».

## Pièges

* > ⚠️ L'indice n'est défini que pour $z_0\notin\Gamma$. Avant d'écrire $\Ind_{z_0}(\gamma)$, vérifier que le lacet ne passe pas par $z_0$ (par exemple avant d'appliquer la formule des résidus : aucun pôle sur le contour).
* > ⚠️ L'orientation compte : $\Ind_{z_0}(\gamma^{opp})=-\Ind_{z_0}(\gamma)$. Un cercle « parcouru dans le sens des aiguilles d'une montre » a un indice $-1$.
* L'indice dépend du **lacet** $\gamma$ (paramétrage avec sa multiplicité et son sens), pas seulement de l'image $\Gamma$ : $e^{2i\pi t}$ et $e^{4i\pi t}$ ont la même image et des indices $1$ et $2$ en $0$.
* Notation du poly : $\Ind_{z_0}(\gamma)$, le point en indice et le lacet entre parenthèses (d'autres textes écrivent $\Ind_\gamma(z_0)$ ou $n(\gamma,z_0)$).
* Le facteur $\frac1{2i\pi}$ est indispensable pour obtenir un entier : $\int_{C(0,1)}dz/z=2i\pi$, et $\Ind_0(C(0,1))=1$.
* L'écriture $\gamma-z_0=\rho e^{i\theta}$ avec $\theta$ continue de l'intuition n'est pas justifiée dans le poly (existence d'un argument continu le long du lacet) ; la preuve rigoureuse de « l'indice est entier » passe par la fonction $\exp\big(\int_0^t\frac{\gamma'}{\gamma-z_0}\big)$, voir [[ch02-indice-entier-localement-constant]].
