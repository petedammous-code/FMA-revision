---
id: ch05-isometrie-bilineaire-curryfication
type: proposition
chapter: 5
title: Isométrie canonique $\mathcal L(E_1,E_2;F)\simeq\mathcal L(E_1;\mathcal L(E_2;F))$
ref: non numéroté, section V.1.4, p. 94
page: 94
importance: 2
depends: [ch05-norme-operateur-def, ch05-espace-multilineaires-norme, ch05-lef-banach-norme-algebre]
tags: [bilineaire, isometrie, curryfication, differentielle-seconde]
---
## Intuition

> 💡 Une fonction de deux variables $f(x,y)$ peut se voir comme une fonction de $x$ **qui renvoie une fonction de $y$** : $x\mapsto f(x,\cdot)$. Pour une application bilinéaire continue, $f(x,\cdot)$ est linéaire continue en $y$, et $x\mapsto f(x,\cdot)$ est linéaire continue en $x$. Les informaticiens appellent cela la **curryfication**.

La proposition dit que ce changement de point de vue est parfait : c'est un isomorphisme linéaire qui **conserve les normes**. On peut donc passer librement de « bilinéaire » à « linéaire à valeurs dans les linéaires ». Usage central : la différentielle de $x\mapsto df_x$ est naturellement dans $\mathcal L(E;\mathcal L(E;F))$, et grâce à cette isométrie on la voit comme une application **bilinéaire** $d^2f_a\in\mathcal L(E,E;F)$ ([[ch05-differentielle-seconde-def]]).

Notations : $\mathcal L(E;F)$ et sa norme d'opérateur : [[ch05-norme-operateur-def]] ; $\mathcal L(E_1,E_2;F)$ (bilinéaires continues) et sa norme $\|f\|=\sup_{\|x\|\le1,\|y\|\le1}\|f(x,y)\|$ : [[ch05-espace-multilineaires-norme]]. Une **isométrie** est ici un isomorphisme linéaire $\Phi$ tel que $\|\Phi(f)\|=\|f\|$ pour tout $f$.

## Énoncé

**Proposition (poly, section V.1.4, p. 94-95, non numérotée).** Soient $E_1$, $E_2$ et $F$ des espaces vectoriels normés. Pour $f\in\mathcal L(E_1,E_2;F)$, posons
$$
\Phi(f)(x)(y)=f(x,y),\qquad (x\in E_1,\ y\in E_2).
$$
Alors $\Phi$ est bien définie de $\mathcal L(E_1,E_2;F)$ dans $\mathcal L(E_1;\mathcal L(E_2;F))$, linéaire, et c'est une **isométrie** : $\|\Phi(f)\|=\|f\|$ pour tout $f$. Son inverse est
$$
\Psi:\mathcal L(E_1;\mathcal L(E_2;F))\to\mathcal L(E_1,E_2;F),\qquad \Psi(g)(x,y)=g(x)(y).
$$
En particulier $\Phi$ et $\Psi$ sont continues de norme au plus $1$, et $\Psi\circ\Phi=\mathrm{Id}_{\mathcal L(E_1,E_2;F)}$, $\Phi\circ\Psi=\mathrm{Id}_{\mathcal L(E_1;\mathcal L(E_2;F))}$.

## Hypothèses

### H1 — $E_1$, $E_2$, $F$ espaces vectoriels normés (aucune complétude)

**Rôle.** Les normes servent à définir les deux normes d'opérateur que l'on compare. Rien d'autre n'est utilisé : la preuve n'est faite que d'inégalités et de manipulations algébriques.

**Si on la retire.** Aucune complétude n'est nécessaire, c'est une hypothèse minimale ; on ne peut pas retirer les normes sans vider l'énoncé de son sens. Cohérence : si $F$ est de Banach, les deux espaces le sont ([[ch05-lef-banach-norme-algebre]] appliqué deux fois, [[ch05-espace-multilineaires-norme]]).

### H2 — on travaille avec des applications **continues** (bilinéaires continues d'un côté, linéaires continues de l'autre)

**Rôle.** C'est l'inégalité $\|f(x,y)\|\le\|f\|\,\|x\|\,\|y\|$ (continuité **jointe** de $f$) qui donne la continuité de $\Phi(f)(x)$ **et** celle de $x\mapsto\Phi(f)(x)$.

**Si on la retire.** Une application bilinéaire seulement **séparément continue** ne donne pas un élément de $\mathcal L(E_1;\mathcal L(E_2;F))$. Exemple : $E_1=E_2=c_{00}$ (suites réelles nulles à partir d'un certain rang, norme $\|x\|_\infty=\max_n|x_n|$), $F=\R$, et $f(x,y)=\sum_{n\ge1}n\,x_ny_n$ (somme finie). Pour $x$ fixé, $|f(x,y)|\le\big(\sum_n n|x_n|\big)\|y\|_\infty$ : $f(x,\cdot)$ est continue, de norme exactement $\sum_nn|x_n|$ (prendre $y_n=\mathrm{signe}(x_n)$). Mais pour $e_n$ (suite valant $1$ en $n$, $0$ ailleurs), $\|e_n\|_\infty=1$ et $\|\Phi(f)(e_n)\|=n$ : $x\mapsto f(x,\cdot)$ n'est pas continue, et $f$ n'est pas (jointement) continue ($f(e_n,e_n)=n$).

## Idée de la preuve

Avec $\|f(x,y)\|\le\|f\|\,\|x\|\,\|y\|$, on montre $\Phi(f)\in\mathcal L(E_1;\mathcal L(E_2;F))$ et $\|\Phi(f)\|\le\|f\|$ ; symétriquement $\|g(x)(y)\|\le\|g\|\,\|x\|\,\|y\|$ donne $\|\Psi(g)\|\le\|g\|$. Comme $\Psi\circ\Phi=\mathrm{Id}$, on obtient $\|f\|\le\|\Phi(f)\|\le\|f\|$.

## Preuve

**$\Phi$ est bien définie.** Soit $f\in\mathcal L(E_1,E_2;F)$. Pour $x\in E_1$ fixé, $y\mapsto\Phi(f)(x)(y)=f(x,y)$ est linéaire (linéarité de $f$ en la 2e variable). Par définition de $\|f\|$ ([[ch05-espace-multilineaires-norme]]),
$$
\|f(x,y)\|_F\le\|f\|\,\|x\|_{E_1}\,\|y\|_{E_2}\qquad(x\in E_1,\ y\in E_2),
$$
donc $\Phi(f)(x)$ est bornée, donc continue : $\Phi(f)(x)\in\mathcal L(E_2;F)$ ([[ch05-norme-operateur-def]]), et
$$
\|\Phi(f)(x)\|=\sup_{y\in\bar B_{E_2}(0,1)}\|f(x,y)\|_F\le\|f\|\,\|x\|_{E_1}.
$$
De même, $x\mapsto\Phi(f)(x)$ est linéaire de $E_1$ dans $\mathcal L(E_2;F)$ (linéarité de $f$ en la 1re variable), et l'inégalité ci-dessus montre qu'elle est continue de norme au plus $\|f\|$ : $\Phi(f)\in\mathcal L(E_1;\mathcal L(E_2;F))$ et $\|\Phi(f)\|\le\|f\|$.

**$\Phi$ est linéaire, continue, de norme $\le1$.** $\Phi(\lambda f+g)(x)(y)=\lambda f(x,y)+g(x,y)$, d'où la linéarité ; et $\|\Phi(f)\|\le\|f\|$ donne $\|\Phi\|\le1$.

**L'inverse $\Psi$.** Soit $g\in\mathcal L(E_1;\mathcal L(E_2;F))$. L'application $\Psi(g):(x,y)\mapsto g(x)(y)$ est bilinéaire (linéaire en $y$ car $g(x)$ est linéaire, linéaire en $x$ car $g$ l'est). Comme $\|g(x)\|\le\|g\|\,\|x\|_{E_1}$,
$$
\|\Psi(g)(x,y)\|_F=\|g(x)(y)\|_F\le\|g(x)\|\,\|y\|_{E_2}\le\|g\|\,\|x\|_{E_1}\,\|y\|_{E_2}.
$$
Donc $\Psi(g)$ est bornée sur le produit des boules unités, donc continue ([[ch05-multilineaire-continue-caracterisation]]), et $\|\Psi(g)\|\le\|g\|$. L'application $\Psi$ est linéaire, donc continue de norme au plus $1$.

**Inverses l'une de l'autre.** Par construction, $\Psi(\Phi(f))(x,y)=\Phi(f)(x)(y)=f(x,y)$ et $\Phi(\Psi(g))(x)(y)=\Psi(g)(x,y)=g(x)(y)$ : $\Psi\circ\Phi=\mathrm{Id}$ et $\Phi\circ\Psi=\mathrm{Id}$. Donc $\Phi$ est un isomorphisme linéaire d'inverse $\Psi$.

**Isométrie.** Pour tout $f\in\mathcal L(E_1,E_2;F)$, en utilisant $\|\Psi(g)\|\le\|g\|$ avec $g=\Phi(f)$ puis $\|\Phi(f)\|\le\|f\|$ :
$$
\|f\|=\|\Psi(\Phi(f))\|\le\|\Phi(f)\|\le\|f\| .
$$
Donc $\|\Phi(f)\|=\|f\|$ : $\Phi$ (et donc $\Psi$) est une isométrie. (Le poly écrit la même chaîne sous la forme $\|f\|\le\|\Psi\|\,\|\Phi(f)\|\le\|\Psi\|\,\|\Phi\|\,\|f\|\le\|f\|$.) $\square$

## Preuve à trous

Soit $f\in\mathcal L(E_1,E_2;F)$. De $\|f(x,y)\|\le\|f\|\,\|x\|\,\|y\|$ on tire que $\Phi(f)(x)=f(x,\cdot)$ est linéaire continue et que <trou indice="majorer la norme d'opérateur de f(x,·)">$\|\Phi(f)(x)\|\le\|f\|\,\|x\|$</trou> ; donc $\Phi(f)\in\mathcal L(E_1;\mathcal L(E_2;F))$ avec $\|\Phi(f)\|\le\|f\|$.

Pour $g\in\mathcal L(E_1;\mathcal L(E_2;F))$, $\Psi(g)(x,y)=g(x)(y)$ est bilinéaire et <trou indice="appliquer deux fois l'inégalité de la norme d'opérateur">$\|g(x)(y)\|\le\|g(x)\|\,\|y\|\le\|g\|\,\|x\|\,\|y\|$</trou>, donc $\Psi(g)\in\mathcal L(E_1,E_2;F)$ et $\|\Psi(g)\|\le\|g\|$.

Par construction <trou>$\Psi\circ\Phi=\mathrm{Id}$ et $\Phi\circ\Psi=\mathrm{Id}$</trou>. Enfin <trou indice="encadrer ‖f‖ en passant par Ψ(Φ(f))">$\|f\|=\|\Psi(\Phi(f))\|\le\|\Phi(f)\|\le\|f\|$</trou>, d'où $\|\Phi(f)\|=\|f\|$. $\square$

## Exemples

* **Forme bilinéaire matricielle.** $E_1=E_2=\R^2$ euclidien, $F=\R$, $A=\begin{pmatrix}1&2\\2&1\end{pmatrix}$, $f(x,y)=x^\top Ay$. Alors $\Phi(f)(x)$ est la forme linéaire $y\mapsto(A^\top x)\cdot y$, de norme $\|A^\top x\|$ ; donc $\|\Phi(f)\|=\|A^\top\|_{\mathrm{op}}=3$ (valeurs propres de la matrice symétrique $A$ : $3$ et $-1$). Directement : $|x^\top Ay|\le\|x\|\,\|Ay\|\le3\|x\|\,\|y\|$, et $x=y=\frac1{\sqrt2}(1,1)$ donne $x^\top Ay=\frac12(1+2+2+1)=3$. On retrouve bien $\|f\|=\|\Phi(f)\|=3$.
* **Différentielle seconde.** $f(x,y)=x^2y$ sur $\R^2$. On a $df_{(x,y)}(h)=2xy\,h_1+x^2h_2$, et la différentielle de $a\mapsto df_a$ en $a=(x,y)$ est l'élément de $\mathcal L(\R^2;\mathcal L(\R^2;\R))$ : $k\mapsto\big(h\mapsto(2yk_1+2xk_2)h_1+2xk_1h_2\big)$. Via $\Psi$, c'est la forme bilinéaire $d^2f_a(k,h)=2y\,k_1h_1+2x\,(k_1h_2+k_2h_1)$, de matrice $\begin{pmatrix}2y&2x\\2x&0\end{pmatrix}$ : la hessienne.
* **Cas $E_1=\R$.** $\mathcal L(\R,E_2;F)\simeq\mathcal L(\R;\mathcal L(E_2;F))\simeq\mathcal L(E_2;F)$ par $f\mapsto f(1,\cdot)$, isométriquement.

## Pièges

* > ⚠️ L'ordre compte : $\Phi(f)(x)(y)=f(x,y)$ fige d'abord la **première** variable. Pour $d^2f_a=d(df)_a$, $d^2f_a(k,h)=\big(d(df)_a(k)\big)(h)$ : $k$ est la direction de la 2e dérivation, $h$ celle de la 1re ; le lemme de Schwarz ([[ch05-lemme-schwarz]]) rend heureusement le résultat symétrique pour $f$ de classe $C^2$.
* « Séparément continue » ne suffit pas pour être dans $\mathcal L(E_1,E_2;F)$ en dimension infinie (contre-exemple de H2).
* Isométrie : il faut **deux** inégalités ; montrer seulement $\|\Phi\|\le1$ ne suffit pas.
