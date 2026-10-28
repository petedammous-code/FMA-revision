---
id: ch02-support-fini-remarque
type: proposition
chapter: 2
title: Les pôles d'indice non nul sont en nombre fini
ref: Remarque II.5.2
page: 47
importance: 2
depends: [ch02-indice-entier-localement-constant, ch02-cauchy-simplement-connexe, ch02-pole-meromorphe-def, ch02-invariance-homotopie-integrale, ch02-discret-accumulation-localement-fini-def, ch02-indice-def]
tags: [indice, poles, support fini, compact, localement fini, formule des residus]
---
## Intuition

> 💡 Un lacet est une courbe compacte : il ne peut « entourer » qu'une région **bornée**. Et si le lacet se contracte en un point dans $\Omega$, la région qu'il entoure ne déborde pas de $\Omega$ ; elle reste même à distance du bord de $\Omega$. Bornée, fermée, loin du bord : c'est un compact de $\Omega$, et un compact de $\Omega$ ne contient qu'un nombre fini de pôles (les pôles forment une partie localement finie). Donc la somme $\sum_s\mathrm{res}_s(f)\Ind_s(\gamma)$ de la formule des résidus ([[ch02-formule-residus]]) n'a qu'un nombre fini de termes non nuls.

Rappels : $\Ind_z(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dw}{w-z}$ est défini pour $z\notin\Gamma$ ($\Gamma$ = image de $\gamma$) ; c'est un entier, constant sur chaque composante connexe de $\C\setminus\Gamma$ et nul sur la composante non bornée ([[ch02-indice-entier-localement-constant]]). Une partie $P$ de $\Omega$ est **localement finie** si $P\cap K$ est fini pour tout compact $K\subset\Omega$ ([[ch02-discret-accumulation-localement-fini-def]]) ; c'est le cas de l'ensemble des pôles d'une fonction méromorphe ([[ch02-pole-meromorphe-def]]).

## Énoncé

**Proposition (poly, Remarque II.5.2, p. 47).** Sous les hypothèses du Théorème II.5.1 ($\Omega$ ouvert simplement connexe — ou seulement : $\gamma$ homotope à un lacet constant dans $\Omega$ —, $f$ méromorphe sur $\Omega$, $\gamma$ lacet inclus dans $\Omega\setminus\mathcal P(f,\Omega)$), l'ensemble des pôles $s\in\mathcal P(f,\Omega)$ tels que $\Ind_s(\gamma)\neq0$ est fini.

Plus précisément, en notant $\Gamma$ l'image de $\gamma$ et $V=\{z\notin\Gamma\,;\,\Ind_z(\gamma)\neq0\}$ : $V$ est borné, $V\subset\Omega$, et l'adhérence $\bar V\subset V\cup\Gamma$ est un compact de $\Omega$. La somme du membre de droite de la formule des résidus est donc à support fini.

## Hypothèses

### H1 — $\gamma$ homotope à un lacet constant dans $\Omega$ (par exemple $\Omega$ simplement connexe)

**Rôle.** Elle donne $\Ind_z(\gamma)=0$ pour tout $z\in\C\setminus\Omega$, donc $V\subset\Omega$ : la région entourée par $\gamma$ ne contient aucun point du complémentaire de $\Omega$, et par conséquent $\bar V$ ne s'approche pas de $\partial\Omega$.

**Si on la retire.** $\Omega=\C^\times$ (non simplement connexe), $f(z)=\dfrac1{\sin(1/z)}$, $\gamma=C(0,1)$. La fonction $\sin(1/z)$ est holomorphe sur l'ouvert connexe $\C^\times$ et non identiquement nulle, donc $f$ est méromorphe sur $\C^\times$ ([[ch02-meromorphes-operations]]) ; ses pôles sont les zéros $s_k=\frac1{k\pi}$, $k\in\Z\setminus\{0\}$, de $\sin(1/z)$ (localement finis dans $\C^\times$ : ils ne s'accumulent qu'en $0\notin\Omega$). Comme $|s_k|\le\frac1\pi<1$, aucun n'est sur $\gamma$ et tous sont dans $D(0,1)$, où $\Ind_{s_k}(\gamma)=1$ ([[ch02-indice-cercle]]) : **une infinité** de pôles d'indice non nul. Ici $V=D(0,1)\setminus\{0\}\not\subset\Omega$… si : $V=D(0,1)^\times\subset\Omega$, mais $\bar V=\bar D(0,1)\not\subset\Omega$ ; en fait $\Ind_0(\gamma)=1\neq0$ avec $0\notin\Omega$, ce qu'interdit H1.

*Remarque.* Dans cet exemple la série des résidus converge quand même : en $s_k$, $q(z)=\sin(1/z)$ a un zéro simple avec $q'(s_k)=-\frac{\cos(k\pi)}{s_k^2}=-(-1)^kk^2\pi^2$, donc $\mathrm{res}_{s_k}(f)=\frac{1}{q'(s_k)}=-\frac{(-1)^k}{k^2\pi^2}$ ([[ch02-residu-pole-simple]]) et $\sum_{k\neq0}\mathrm{res}_{s_k}(f)=-\frac2{\pi^2}\sum_{k\ge1}\frac{(-1)^k}{k^2}=\frac16$. Le théorème ne s'applique pas, mais le changement de variable $w=1/z$ montre que $\frac1{2i\pi}\int_{C(0,1)}f=\mathrm{res}_0\big(\frac1{w^2\sin w}\big)=\frac16$ : coïncidence heureuse, que rien dans le cours ne garantit en général.

### H2 — Les pôles forment une partie localement finie de $\Omega$ ($f$ méromorphe)

**Rôle.** C'est la dernière étape : le compact $\bar V\subset\Omega$ ne contient qu'un nombre fini de points de cette partie.

**Si on la retire.** Sur $\Omega=\C$ (simplement connexe) avec la même « fonction » $\frac1{\sin(1/z)}$, l'ensemble $\{0\}\cup\{\frac1{k\pi}\}$ des points singuliers s'accumule en $0\in\Omega$ : il n'est pas localement fini, la fonction n'est pas méromorphe sur $\C$, et le lacet $C(0,1)$ entoure une infinité de pôles.

### H3 — $\gamma$ lacet de $\Omega$ ne passant par aucun pôle

**Rôle.** $\Gamma\subset\Omega$ sert à avoir $\bar V\subset V\cup\Gamma\subset\Omega$ ; $\Gamma$ ne contenant pas de pôle, l'indice est défini en chaque pôle.

**Si on la retire.** Si $\Gamma$ contient un pôle, $\Ind_s(\gamma)$ n'est pas défini pour ce pôle et l'énoncé perd son sens ; si $\Gamma\not\subset\Omega$, la notion d'homotopie dans $\Omega$ n'a pas de sens.

## Idée de la preuve

$V$ est borné car $\Gamma$ est compact et l'indice est nul sur la composante non bornée de $\C\setminus\Gamma$ ; $V\subset\Omega$ car l'indice est nul hors de $\Omega$ (Cauchy pour $\frac1{w-z}$, holomorphe sur $\Omega$) ; le bord de $V$ est dans $\Gamma$ (l'indice est localement constant hors de $\Gamma$). Donc $\bar V$ est un compact de $\Omega$, qui ne contient qu'un nombre fini de pôles.

## Preuve

Notons $\Gamma=\gamma([0,1])$, compact (image continue d'un compact) et contenu dans $\Omega\setminus\mathcal P(f,\Omega)$, et $V=\{z\in\C\setminus\Gamma\,;\,\Ind_z(\gamma)\neq0\}$.

*$V$ est borné.* Comme $\Gamma$ est compact, il existe $R>0$ tel que $\Gamma\subset D(0,R)$. L'ensemble $\{|z|>R\}$ est connexe et contenu dans $\C\setminus\Gamma$, donc contenu dans une seule composante connexe de $\C\setminus\Gamma$, qui est non bornée ; l'indice y est nul (Proposition II.3.2, [[ch02-indice-entier-localement-constant]]). Donc $V\subset\bar D(0,R)$.

*$V\subset\Omega$.* Soit $z\in\C\setminus\Omega$. La fonction $w\mapsto\frac1{w-z}$ est holomorphe sur $\Omega$, et $\gamma$ est homotope à un lacet constant $c$ dans $\Omega$ ; par invariance par homotopie ([[ch02-invariance-homotopie-integrale]]), ou directement par le Corollaire II.2.2 ([[ch02-cauchy-simplement-connexe]]) si $\Omega$ est simplement connexe,
$$
\Ind_z(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dw}{w-z}=\frac1{2i\pi}\int_c\frac{dw}{w-z}=0 .
$$
(Ici $z\notin\Gamma$ puisque $\Gamma\subset\Omega$.) Donc $z\notin V$ : $V\subset\Omega$.

*Le bord de $V$ est contenu dans $\Gamma$, i.e. $\bar V\subset V\cup\Gamma$.* Soit $z\in\bar V\setminus\Gamma$. Comme $\Gamma$ est fermé, il existe $\rho>0$ tel que $D(z,\rho)\subset\C\setminus\Gamma$. Le disque $D(z,\rho)$ est connexe, donc contenu dans une composante connexe de $\C\setminus\Gamma$, sur laquelle l'indice est constant ([[ch02-indice-entier-localement-constant]]). Comme $z\in\bar V$, le disque $D(z,\rho)$ rencontre $V$ : l'indice y est donc constamment non nul, et en particulier $\Ind_z(\gamma)\neq0$, c'est-à-dire $z\in V$.

*Conclusion.* $\bar V$ est fermé et borné (car $V\subset\bar D(0,R)$, fermé), donc compact ; et $\bar V\subset V\cup\Gamma\subset\Omega$. L'ensemble $\mathcal P(f,\Omega)$ des pôles est contenu dans la partie localement finie $P$ de la définition de la méromorphie ([[ch02-pole-meromorphe-def]]), donc $\mathcal P(f,\Omega)\cap\bar V$ est fini ([[ch02-discret-accumulation-localement-fini-def]]). Enfin, un pôle $s$ tel que $\Ind_s(\gamma)\neq0$ appartient à $V$ (rappelons que $s\notin\Gamma$), donc à $\mathcal P(f,\Omega)\cap\bar V$ : il n'y en a qu'un nombre fini. La somme $\sum_{s\in\mathcal P(f,\Omega)}\mathrm{res}_s(f)\Ind_s(\gamma)$ est à support fini. $\square$

## Preuve à trous

Soit $V=\{z\notin\Gamma\,;\,\Ind_z(\gamma)\neq0\}$. D'abord $V$ est borné : <trou indice="que vaut l'indice loin du lacet ?">si $\Gamma\subset D(0,R)$, l'ouvert connexe $\{|z|>R\}$ est inclus dans la composante non bornée de $\C\setminus\Gamma$, où l'indice est nul</trou>. Ensuite $V\subset\Omega$ : pour $z\notin\Omega$, <trou indice="la fonction w ↦ 1/(w−z) est holomorphe sur Ω">$\Ind_z(\gamma)=\frac1{2i\pi}\int_\gamma\frac{dw}{w-z}=0$ par invariance par homotopie de $\gamma$ à un lacet constant dans $\Omega$</trou>. Puis $\bar V\subset V\cup\Gamma$ : <trou indice="l'indice est localement constant hors de Γ">si $z\in\bar V\setminus\Gamma$, un disque $D(z,\rho)\subset\C\setminus\Gamma$ rencontre $V$ et l'indice y est constant, donc $\Ind_z(\gamma)\neq0$</trou>. Ainsi $\bar V$ est un compact contenu dans $\Omega$, et <trou>comme les pôles forment une partie localement finie de $\Omega$, $\bar V$ n'en contient qu'un nombre fini</trou> ; or tout pôle d'indice non nul est dans $V$. $\square$

## Exemples

* **$\dfrac1{\sin z}$ sur un grand cercle.** $\Omega=\C$, $f(z)=\frac1{\sin z}$ a une infinité de pôles $k\pi$, $k\in\Z$. Pour $\gamma=C(0,10)$ (qui ne passe par aucun pôle car $3\pi<10<4\pi$), seuls les sept pôles $k\pi$, $|k|\le3$, ont un indice non nul (égal à $1$). Avec $\mathrm{res}_{k\pi}(f)=(-1)^k$ ([[ch02-residu-pole-simple]]) : $\frac1{2i\pi}\int_{C(0,10)}\frac{dz}{\sin z}=\sum_{k=-3}^{3}(-1)^k=1-2+2-2=-1$.
* **Un lacet compliqué.** Même un lacet qui s'enroule de manière arbitraire (huit, spirale refermée, ...) n'a un indice non nul que sur une partie bornée de $\C$ ; pour une fonction entière ou une fraction rationnelle sur $\Omega=\C$, la condition $V\subset\Omega$ est automatique et seule la bornitude de $V$ intervient.

## Pièges

* > ⚠️ Ce n'est pas seulement « $V$ est borné » : il faut aussi que $\bar V$ reste **dans $\Omega$**, faute de quoi les pôles peuvent s'accumuler sur le bord de $\Omega$ à l'intérieur du lacet (exemple de $\frac1{\sin(1/z)}$ sur $\C^\times$, H1).
* Le fait que $f$ ait une infinité de pôles dans $\Omega$ n'est pas un obstacle à la formule des résidus : seule compte la finitude des pôles **d'indice non nul**.
* L'inclusion $\bar V\subset V\cup\Gamma$ utilise que l'indice est **localement constant** hors de $\Gamma$, pas une propriété géométrique du lacet (aucune hypothèse de lacet simple ni de théorème de Jordan n'est nécessaire).
